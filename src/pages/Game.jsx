import React from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Question from '../Components/Question';

function Game() {
  return (
    <div className=" w-full">
      <Header />
      <section
        className="
          w-[100%]
          grid
          grid-cols-2
          lg:flex
          lg:flex-col
          lg:justify-center
          lg:items-stretch
          lg:gap-12
        "
      >
        <Question />
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  failedRequest: state.player.requisition.failed,
});

export default connect(mapStateToProps)(Game);
