var React = require('react');
var Link  = require('rrouter').Link;

var User  = require('./user');
var Match = require('./match');
var Vs    = require('./vs');

var api = require('../api');

module.exports = React.createClass({

  render: function () {
    var matchDay = api.getMatchDay();
    var users = this.props.users;
    var matches = this.props.matches;

    if (!users && !matches) {
      return (
        <p>Loading..</p>
      );
    }

    var Users = users.map(user => <User user={user} />);
    var Matches = matches.map(match => {
      return (
        <tr>
          <td><Vs home={match.homename} away={match.awayname} /></td>
          <td>{match.homegoals} - {match.awaygoals}</td>
        </tr>
      )
    });

    return (
      <section>
        <h2>Dagens kamper</h2>
        <table>
          {Matches}
        </table>
        <Link to="matchday" day={matchDay}>Se hva som er tippet i dag?</Link>
        <h2>Deltagere</h2>
        <ul>
          {Users}
        </ul>
      </section>
    );
  }
});
