import {
  Search01Icon,
  Settings02Icon,
  Clock01Icon,
  UserGroupIcon,
  SparklesIcon,
  Target01Icon,
  JusticeScale01Icon,
  BoatIcon,
} from "hugeicons-react";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg-main text-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-20 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1
              className="text-8xl font-extralight gradient-text tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SYON
            </h1>
            <p
              className="text-4xl gradient-text-accent font-light tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Should You Take This Project?
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Take our assessment to get a clear recommendation on whether 
              that freelance project opportunity is right for you.
            </p>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="gradient-bg-card rounded-3xl border-2 border-border p-16 text-center space-y-10 hover:gradient-bg-card-hover transition-all duration-500">
          <h2
            className="text-5xl font-normal gradient-text mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get Your Project Decision in Minutes
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed">
              Every freelance project invitation is a crossroads. Should you take on that new client? 
              Is the budget worth your time? Does the timeline work with your capacity?
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our assessment evaluates your project opportunity across four key factors and gives you a 
              <span className="font-medium gradient-text-accent">
                {" "}
                clear yes or no recommendation
              </span>
              {" "}based on scope clarity, budget vs effort, technical fit, and timeline urgency.
            </p>
          </div>

          <div className="pt-8">
            <button className="btn btn-gradient-primary btn-large btn-pill transition-all duration-300">
              Take The Test
            </button>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="space-y-16">
          <h3
            className="text-5xl font-light gradient-text text-center tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How We Evaluate Your Project
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="gradient-bg-card rounded-2xl p-10 text-center space-y-6 border-2 border-border hover:gradient-bg-card-hover hover:border-border-heavy transition-all duration-500">
              <div className="flex justify-center mb-6">
                <Search01Icon size={56} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Scope Clarity
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Are the project requirements well-defined? Can you deliver what they&apos;re expecting?
              </p>
            </div>

            <div className="gradient-bg-card rounded-2xl p-10 text-center space-y-6 border-2 border-border hover:gradient-bg-card-hover hover:border-border-heavy transition-all duration-500">
              <div className="flex justify-center mb-6">
                <JusticeScale01Icon size={56} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Budget vs Effort
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Is the compensation fair for the time and complexity involved?
              </p>
            </div>

            <div className="gradient-bg-card rounded-2xl p-10 text-center space-y-6 border-2 border-border hover:gradient-bg-card-hover hover:border-border-heavy transition-all duration-500">
              <div className="flex justify-center mb-6">
                <Settings02Icon size={56} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Technical Fit
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Do your skills align with what&apos;s needed? Will this project advance your expertise?
              </p>
            </div>

            <div className="gradient-bg-card rounded-2xl p-10 text-center space-y-6 border-2 border-border hover:gradient-bg-card-hover hover:border-border-heavy transition-all duration-500">
              <div className="flex justify-center mb-6">
                <Clock01Icon size={56} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Timeline & Capacity
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Can you deliver quality work within their deadline and your current workload?
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="gradient-bg-card rounded-3xl p-16 space-y-12 border-2 border-border hover:gradient-bg-card-hover transition-all duration-500">
          <h3
            className="text-5xl font-light gradient-text text-center mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Smart Decision-Making
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <BoatIcon size={48} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Quick Assessment
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Get your project recommendation in under 5 minutes with our focused evaluation
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <UserGroupIcon size={48} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Clear Recommendation
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Receive a definitive yes or no answer with reasoning behind the recommendation
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <SparklesIcon size={48} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Data-Driven Insights
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Based on proven freelance success factors, not just gut feeling
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Target01Icon size={48} className="text-slate-600" />
              </div>
              <h4 className="text-2xl font-semibold gradient-text mb-4">
                Better Project Outcomes
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Take projects that align with your goals and avoid costly mistakes
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-8">
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Stop second-guessing project opportunities. Get a clear recommendation 
            on whether you should take that project in just a few minutes.
          </p>
          <button className="btn btn-gradient-secondary btn-xl btn-pill transition-all duration-300">
            Take The Test ✨
          </button>
        </div>
      </div>
    </main>
  );
}
