import React from 'react';

export default React.createClass({
  render(): any {
    return <p className="resource">
      <a href={this.props.url} target="_blank">{this.props.title}</a>
    </p>;
  }
});
