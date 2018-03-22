import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { View, } from "react-native";
import { styles } from "./styles";
import { goToScene } from "../../navigation/NavigationHelper";
import { createAnswerList, addToScore } from "../../redux/modules/quiz";
import { connect } from "react-redux";
import { renderCard } from "../../components/renderCard.js"
import PropTypes from "prop-types";
class ProjectResourceTest extends Component {
  constructor(props) {
    super(props);

  }



  onSwipedAllCards = () => {
    for (var i = 0; i < this.props.solutions.length; i++) {
      if (this.props.usersanswers[i] === this.props.solutions[i]) {
        this.props.dispatch(addToScore(1));
      }
    }

    const score = this.props.scorebank / this.props.solutions.length;

    goToScene("devRoutes", "projectResourceTestResults", score);
  };

  _onSwipedRight = () => {
    this.props.dispatch(createAnswerList(true));
  };
  _onSwipedLeft = () => {
    this.props.dispatch(createAnswerList(false));
  };

  render() {
    let cardIndex = 0

    return (
      <View style={styles.container}>
        <View>
          <Swiper
            ref={swiper => {
              this.swiper = swiper;
            }}
            onSwiped={this.onSwiped}
            onSwipedRight={this._onSwipedRight}
            onSwipedLeft={this._onSwipedLeft}
            cards={this.props.questions}
            cardIndex={cardIndex}
            cardVerticalMargin={0}
            verticalSwipe={false}
            cardHorizontalMargin={0}
            renderCard={renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={0}
            stackSeparation={0}

            animateOverlayLabelsOpacity
            animateCardOpacity
          />
        </View>
      </View>
    );

  }
}
const mapStateToProps = state => {
  return {
    usersanswers: state.quiz.answers,
    scorebank: state.quiz.score
  };
};
ProjectResourceTest.defaultProps = {
  usersanswers: [],
  scorebank: []
};
ProjectResourceTest.propTypes = {
  usersanswers: PropTypes.array,
  scorebank: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  solutions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProjectResourceTest);
