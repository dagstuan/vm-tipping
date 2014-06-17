var React = require('react');
var _     = require('lodash');

module.exports = React.createClass({

  render: function () {
    var match = this.match();

    var matchClass = 'no-outcome';

    if (match.matchPlayed) {
      if (match.correctResult) {
        matchClass = 'correct-result';
      } else if (match.correctOutcome) {
        matchClass = 'correct-outcome';
      } else {
        matchClass = 'wrong-outcome';
      }
    }

    var matchResult = '(' + (match.actualHomegoals || 0) + ' - ' + (match.actuallAwaygoals || 0) + ')';

    return (
      <li className={matchClass + ' bet'}>
        <span>{match.homename + ' - ' + match.awayname} {matchResult}</span>
        <span>{match.homegoals + ' - ' + match.awaygoals}</span>
      </li>
    );    
  },

  match: function () {
    return this.props.match;
  }
});
