import React, { Component } from "react";
import "./clock.scss";

class Clock extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      time: new Date(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),

      msg: "",
      username: localStorage.getItem("username"),

      usernameSet: localStorage.getItem("username") ? true : false,

      hovering: false,
    };
  }

  tick = () => {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // Add "0" when needed

      // Add "0" (hours)
      if (this.state.time.getHours() < 10) {
        this.setState({
          hours: `0${this.state.time.getHours()}`,
        });
      } else {
        this.setState({
          hours: this.state.time.getHours(),
        });
      }

      // Add "0" (minutes)
      if (this.state.time.getMinutes() < 10) {
        this.setState({
          minutes: `0${this.state.time.getMinutes()}`,
        });
      } else {
        this.setState({
          minutes: this.state.time.getMinutes(),
        });
      }

      // Add "0" (seconds)
      if (this.state.time.getSeconds() < 10) {
        this.setState({
          seconds: `0${this.state.time.getSeconds()}`,
        });
      } else {
        this.setState({
          seconds: this.state.time.getSeconds(),
        });
      }
    }, 500);
  };

  getTageszeit() {
    const { changeBackground } = this.props;
    if (this.state.hours > 4 && this.state.hours < 12) {
      this.setState({
        msg: "Guten Morgen,",
      });
      changeBackground("firewatch-forest-gold-morning", false);
    } else if (this.state.hours >= 12 && this.state.hours < 18) {
      this.setState({
        msg: "Guten Tag,",
      });
      changeBackground("firewatch-forest-day-green", false);
    } else if (this.state.hours >= 18 && this.state.hours < 23) {
      this.setState({
        msg: "Guten Abend,",
      });
      changeBackground("firewatch-forest-evening-red", false);
    } else {
      this.setState({
        msg: "Gute Nacht,",
      });
      changeBackground("firewatch-forest-night-green", false);
    }
  }

  handleSubmit = () => {
    this.setState({ usernameSet: true });
  };

  handleChange = (e) => {
    localStorage.setItem("username", e.target.value);
    this.setState({
      username: localStorage.getItem("username"),
    });
  };

  reset = () => {
    this.setState({
      usernameSet: localStorage.removeItem("username"),
    });
  };

  componentDidMount() {
    this.tick();
    this.getTageszeit();
  }

  render() {
    const msg = (
      <span
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      >
        {this.state.msg}&nbsp;{this.state.username}{" "}
        {this.state.hovering ? (
          <i onClick={() => this.reset()} class="fas fa-edit"></i>
        ) : (
          ""
        )}
      </span>
    );

    const form = (
      <form onSubmit={() => this.handleSubmit()}>
        <input
          required
          onChange={this.handleChange}
          id="name"
          name="input"
          placeholder="&nbsp;dein Vorname"
          type="text"
        />
        <button id="submit" type="submit">
          <i class="fas fa-check"></i>
        </button>
      </form>
    );

    return (
      <div className="clock">
        <div className="clock-wrapper">
          {this.state.hours} : {this.state.minutes}{" "}
          <div className="show-seconds">: {this.state.seconds}</div>
        </div>
        <div className="msg">{!this.state.usernameSet ? form : msg}</div>
      </div>
    );
  }
}

export default Clock;
