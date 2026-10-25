import { Component, type ReactNode } from 'react'

/** Keeps one failing section from blanking the whole homepage. */
export class SectionBoundary extends Component<{ name: string; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    console.error(`Section ${this.props.name} failed to render`, error)
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}
