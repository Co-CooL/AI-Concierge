import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function BookingPage() {
  const { user, loading, signIn } = useAuth();
  const [step, setStep] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-xl border border-surface-container-highest text-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4">account_circle</span>
          <h2 className="text-3xl font-extrabold text-navy mb-4 tracking-tight">Sign in to Book</h2>
          <p className="text-on-surface-variant mb-8">Please log in or create an account to schedule a tech support session.</p>
          <button 
            onClick={signIn}
            className="w-full bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">login</span>
            Continue with Google
          </button>
          <div className="mt-6">
            <Link to="/" className="text-on-surface-variant font-semibold hover:text-navy transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleBookSession = () => {
    setStep(3);
  };

  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      // First save the booking as pending payment
      const docRef = await addDoc(collection(db, 'bookings'), {
        caregiverId: user.uid,
        seniorId: 'temp_senior_id', // We would normally select the senior here
        issueType: selectedIssue,
        scheduledTime: selectedTime,
        status: 'pending_payment',
        createdAt: new Date().toISOString()
      });

      // Then call our backend to create a Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: `Tech Support Session: ${issues.find(i => i.id === selectedIssue)?.label}`,
          amount: 4900, // $49.00
          successUrl: `${window.location.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}&booking_id=${docRef.id}`,
          cancelUrl: `${window.location.origin}/book`,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("There was an error initiating payment. Please try again.");
      setIsSubmitting(false);
    }
  };

  const issues = [
    { id: 'tablet', icon: 'tablet_mac', label: 'iPad / Tablet' },
    { id: 'tv', icon: 'tv', label: 'Smart TV' },
    { id: 'printer', icon: 'print', label: 'Printer / Scanner' },
    { id: 'wifi', icon: 'wifi', label: 'Internet / WiFi' },
    { id: 'health', icon: 'health_and_safety', label: 'Health App' },
    { id: 'other', icon: 'help', label: 'Something Else' },
  ];

  const times = [
    'Today, 2:00 PM', 'Today, 4:30 PM', 
    'Tomorrow, 10:00 AM', 'Tomorrow, 1:15 PM',
    'Wednesday, 11:00 AM', 'Wednesday, 3:00 PM'
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Simple Header */}
      <header className="bg-surface px-8 py-6 flex items-center border-b border-surface-container-highest">
        <Link to="/dashboard" className="flex items-center gap-2 text-on-surface-variant hover:text-navy transition-colors font-medium">
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Dashboard
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-xl border border-surface-container-highest">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-surface-container-high -z-10 -translate-y-1/2"></div>
            <div className={`absolute left-0 top-1/2 h-1 bg-primary -z-10 -translate-y-1/2 transition-all duration-500`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
            
            {[1, 2, 3].map((num) => (
              <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= num ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                {step > num ? <span className="material-symbols-outlined text-sm">check</span> : num}
              </div>
            ))}
          </div>

          {/* Step 1: Select Issue */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-extrabold text-navy mb-2 tracking-tight">What does Margaret need help with?</h2>
              <p className="text-on-surface-variant mb-8">Select the device or service causing trouble.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {issues.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue.id)}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-200 ${selectedIssue === issue.id ? 'border-primary bg-primary/5 text-primary' : 'border-surface-container-high bg-surface hover:border-primary/50 text-navy'}`}
                  >
                    <span className="material-symbols-outlined text-3xl">{issue.icon}</span>
                    <span className="font-semibold text-sm">{issue.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button 
                  disabled={!selectedIssue}
                  onClick={() => setStep(2)}
                  className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
                >
                  Next Step <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Time */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-extrabold text-navy mb-2 tracking-tight">When should we call?</h2>
              <p className="text-on-surface-variant mb-8">We'll send a secure, one-tap link to Margaret's phone at this time.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${selectedTime === time ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-surface-container-high bg-surface hover:border-primary/50 text-navy font-medium'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="text-on-surface-variant font-semibold hover:text-navy px-4 py-3">Back</button>
                <button 
                  disabled={!selectedTime || isSubmitting}
                  onClick={handleBookSession}
                  className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
                >
                  {isSubmitting ? 'Booking...' : 'Review Booking'} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
              <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">receipt_long</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy mb-2 tracking-tight">Review & Pay</h2>
              <p className="text-on-surface-variant mb-8">Please review the details below to confirm your booking.</p>
              
              <div className="bg-surface-container-low rounded-2xl p-6 text-left mb-8 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Time</p>
                    <p className="font-semibold text-navy">{selectedTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">devices</span>
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Issue</p>
                    <p className="font-semibold text-navy">{issues.find(i => i.id === selectedIssue)?.label}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-surface-container-highest">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Total Due</p>
                    <p className="font-semibold text-primary text-xl">$49.00</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <button 
                  onClick={handleCheckout}
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy/90 transition-colors duration-300 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Redirecting to Stripe...' : 'Pay $49 & Confirm'}
                  {!isSubmitting && <span className="material-symbols-outlined text-sm">lock</span>}
                </button>
                <button 
                  onClick={() => setStep(2)} 
                  disabled={isSubmitting}
                  className="text-on-surface-variant font-semibold hover:text-navy px-4 py-3 disabled:opacity-50"
                >
                  Back
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
