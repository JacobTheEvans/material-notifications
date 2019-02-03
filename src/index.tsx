import * as React  from 'react'

type State = {
  counter: number
}

export class Test extends React.Component<{}, State> {
  state: State = {
    counter: 0
  }

  handleClick = (): void => {
    this.setState((
      { counter }: { counter: number }
      ) => ({
      counter: counter + 1
    }))
  }

  render () {
    const { counter }: { counter: number } = this.state
    return (
      <p>
        {counter}
        <button onClick={this.handleClick}>Add</button>
      </p>
    )
  }
}
