import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-page px-6 text-center">
          <div>
            <h1 className="font-heading text-3xl font-semibold text-white">Something went wrong</h1>
            <p className="mt-4 text-white/60">Please refresh the page to try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
