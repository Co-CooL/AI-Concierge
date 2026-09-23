import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center bg-surface">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-surface-container-low flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-surface-container-highest hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">spa</span>
          <span className="text-xl font-extrabold tracking-tight text-navy font-headline">Silver Tech</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-container/10 text-primary rounded-xl font-semibold">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-navy rounded-xl font-medium transition-colors">
            <span className="material-symbols-outlined">devices</span>
            Devices
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-navy rounded-xl font-medium transition-colors">
            <span className="material-symbols-outlined">history</span>
            Session History
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-navy rounded-xl font-medium transition-colors">
            <span className="material-symbols-outlined">credit_card</span>
            Billing
          </a>
        </nav>
        <div className="p-4">
          <button onClick={signOut} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-navy rounded-xl font-medium transition-colors">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="bg-surface px-8 py-6 flex justify-between items-center sticky top-0 z-10 border-b border-surface-container-highest md:border-none">
          <div>
            <h1 className="text-2xl font-bold text-navy font-headline">Welcome back, {user.displayName?.split(' ')[0] || 'User'}</h1>
            <p className="text-on-surface-variant text-sm mt-1">Managing tech support for Margaret</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors relative">
              <span className="material-symbols-outlined text-navy">notifications</span>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-tertiary rounded-full border-2 border-surface"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-navy font-bold">
              D
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-8">
          
          {/* Quick Actions & Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-surface rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border-4 border-surface-container-low bg-tertiary-container overflow-hidden shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpQgt8SjujDZYu8-4sH4sGHD1cyrTaduylR2i6byVUtM87_w1mO01w0VY1BU7_bMvd2IRWCB-iuvRLwuydh4P8p_Ubi8POlBE1u7fIrCC5NnNO4g9AOtFhrgUs3WwwLI9DoelMS1kc1mfPrZ5Ok2yOm6BE0yiTn36JqBDi8NgrqtLqD-CigbfBYemicnOTVtnuXdRkzIkqmKlLkr3_V52vFqBo_257EL_DmUd0hzTO_lmIbxVcZfOVS3d1B8pvFOooG6vzJjtQEXU" alt="Margaret" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-1">Margaret's Status</h2>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    All devices online and updated
                  </div>
                </div>
              </div>
              <Link to="/book" className="w-full md:w-auto bg-primary-container text-on-primary-container px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">support_agent</span>
                Book a Session
              </Link>
            </div>

            <div className="bg-[#0A2540] rounded-[2rem] p-8 shadow-xl text-white flex flex-col justify-between">
              <div>
                <p className="text-white/70 text-sm font-medium mb-1">Current Plan</p>
                <h3 className="text-xl font-bold mb-4">Unlimited Family</h3>
                <div className="flex items-center gap-2 text-sm text-primary-container">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Active Subscription
                </div>
              </div>
              <button className="mt-6 text-sm font-semibold text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                Manage Billing <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Devices & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Devices */}
            <div className="space-y-4">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-xl font-bold text-navy">Connected Devices</h3>
                <button className="text-primary font-semibold text-sm hover:underline">View All</button>
              </div>
              
              <div className="bg-surface rounded-2xl p-5 shadow-sm flex items-center justify-between group hover:bg-surface-container-lowest transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/50 flex items-center justify-center text-navy">
                    <span className="material-symbols-outlined">tablet_mac</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Margaret's iPad</h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">Last active: 2 hours ago</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </div>

              <div className="bg-surface rounded-2xl p-5 shadow-sm flex items-center justify-between group hover:bg-surface-container-lowest transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/50 flex items-center justify-center text-navy">
                    <span className="material-symbols-outlined">tv</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Living Room Roku TV</h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">Last active: Yesterday</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </div>

              <div className="bg-surface rounded-2xl p-5 shadow-sm flex items-center justify-between group hover:bg-surface-container-lowest transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">print</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">HP Envy Printer</h4>
                    <p className="text-xs text-tertiary font-medium mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Offline
                    </p>
                  </div>
                </div>
                <button className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                  Fix
                </button>
              </div>
            </div>

            {/* Recent Sessions */}
            <div className="space-y-4">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-xl font-bold text-navy">Recent Support Sessions</h3>
                <button className="text-primary font-semibold text-sm hover:underline">View History</button>
              </div>

              <div className="bg-surface rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-navy">FaceTime Audio Issue</h4>
                  <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">Oct 24</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">Margaret couldn't hear her sister on FaceTime. Guided her to check the volume buttons and disable Bluetooth hearing aid routing.</p>
                <div className="flex items-center gap-2 text-xs font-medium text-navy">
                  <div className="w-5 h-5 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhWvF7Fu4Qkowl3rpsTL-d5iKjCP_q4TBKHq46wvZ58tkEbv_guVB8kKSJndDzNvmWJXIbQLhYcaf7Ni5LEUuKZhJVJrC-v-tb0hN_hbm6rfLzOPuQdHWPx_ie_nApGrsml3l7VOAIg9_kvph7KXGRYie6kTVDb_Ma7onEqMSqT9UAlcUg57IXv1uW2wtkRI8Q2yuWUAfHvpe9RJ9Z4T9TwkmiKjIE1N3J0Tg1BdtF-gmNFlgIxt1FRdNICKivo58RttYkv9Dp40s" alt="Sarah" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  Resolved by Sarah (Concierge)
                </div>
              </div>

              <div className="bg-surface rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-container-highest"></div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-navy">Connecting to new WiFi</h4>
                  <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">Oct 12</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">Walked through finding the new router password and connecting the iPad and Smart TV.</p>
                <div className="flex items-center gap-2 text-xs font-medium text-navy">
                  <div className="w-5 h-5 rounded-full bg-tertiary-container flex items-center justify-center overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqtRviC8al6rfrV_1SxGCJkCER4noHGHTwlcJQX6uxrN09gcSFUEc5nfPmsB2BAq8bhIbUW9kMt2ut2c8mnjDOf_sPFUV0zjja0F0K0pp_JISgPENwzz80RUCmiTyvTbMTke_fmH3z8Rkz-EQdh7PYvaB2qFdR258nyzb-M1tNwTT3i11--DgZLALuh8XvzsjFjRTA1wudvKp8-aHNy6pedXEsh1SolPxjjZzJ3-3vkM5RIxEzmpkxpZte-bO2EkDzwIkcpTdZ2s4" alt="Mike" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  Resolved by Mike (Concierge)
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
