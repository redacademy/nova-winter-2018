import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./styles";

export default class ProjectResourceTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5",
        "Question 6",
        "Question 7",
        "Question 8",
        "Question 9",
        "Question 10"
      ],
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
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
    this.setState({
      swipedAllCards: true
    });
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    );
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Swiper
            ref={swiper => {
              this.swiper = swiper;
            }}
            onSwiped={this.onSwiped}
            cards={this.state.cards}
            cardIndex={this.state.cardIndex}
            cardVerticalMargin={0}
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
  }
}
