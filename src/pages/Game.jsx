import React from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Question from '../Components/Question';

function Game() {
  return (
    <div className="h-full w-full">
      <Header />
      <section
        className="
          w-[100%]
          grid
          grid-cols-2
        "
      >
        <Question />
      </section>
    </div>
  )
}

const mapStateToProps = (state) => ({
  failedRequest: state.player.requisition.failed
})

export default connect(mapStateToProps)(Game);
