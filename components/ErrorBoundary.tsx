import React, {
  Component,
  ErrorInfo,
  ReactNode
} from 'react';

type Props = {
  fallback?: () => JSX.Element;
};

type State = {
  error: boolean;
};

class ErrorBoundary extends Component<Props, State> {

  state: State = {error: false};

  static defaultProps = {
    fallback: () =>
      <>
        <div>Application error</div>
      </>
  };

  static getDerivedStateFromError(error: Error): State {
    return {error: true};
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary:', error, info);
  }

  render(): ReactNode {
    const {error} = this.state;
    const {children, fallback} = this.props;

    if (error) {
      return fallback!();
    }

    return children;
  }
}

export default ErrorBoundary;
