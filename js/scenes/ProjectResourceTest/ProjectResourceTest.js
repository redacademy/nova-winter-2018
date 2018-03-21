import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { goToScene } from "../../navigation/NavigationHelper";
import { createAnswerList, addToScore } from "../../redux/modules/quiz";
import { connect } from "react-redux";
class ProjectResourceTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 0
    };
  }

  renderCard = card => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{card}</Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.trueInput}>
            <Text style={styles.trueText}>YES</Text>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/rightswipey.png")}
              resizeMode="contain"
            />
            <Text style={styles.message}>Swipe Right</Text>
          </View>
          <View style={styles.falseInput}>
            <Text style={styles.trueText}>NO</Text>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/leftswipey.png")}
              resizeMode="contain"
            />
            <Text style={styles.message}>Swipe Left</Text>
          </View>
        </View>
      </View>
    );
  };

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
    if (this.props.questions) {
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
              cardIndex={this.state.cardIndex}
              cardVerticalMargin={0}
              verticalSwipe={false}
              cardHorizontalMargin={0}
              renderCard={this.renderCard}
              onSwipedAll={this.onSwipedAllCards}
              stackSize={0}
              stackSeparation={0}
              overlayLabels={{
                left: {
                  title: "False",
                  style: {
                    label: {
                      backgroundColor: "black",
                      borderColor: "black",
                      color: "white",
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-start"
                    }
                  }
                },
                right: {
                  title: "True",
                  style: {
                    label: {
                      backgroundColor: "black",
                      borderColor: "black",
                      color: "white",
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start"
                    }
                  }
                }
              }}
              animateOverlayLabelsOpacity
              animateCardOpacity
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingMessage}>Loading</Text>
        </View>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    usersanswers: state.quiz.answers,
    scorebank: state.quiz.score
  };
};
export default connect(mapStateToProps)(ProjectResourceTest);
