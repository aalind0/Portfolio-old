
import React, { Component } from 'react';
import autobind from 'autobind-decorator';


@autobind
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterJobs: this.props.filterJobs,
      filterSideProjects: this.props.filterSideProjects
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({filterJobs: nextProps.filterJobs});
    this.setState({filterSideProjects: nextProps.filterSideProjects});
  }

  renderAll() {
    const { collectionToRender } = this.props;
    let CardCollection = Object.keys(collectionToRender).map(el => collectionToRender[el]),
        key = 0;

    return CardCollection.map(el => {
      key+= 1;
      return <div className='CardList-item' key={key}>{el()}</div>;
    });
  }

  renderCollection() {
    const {filterJobs, filterSideProjects} = this.state;

    switch (true) {
      case filterJobs && !filterSideProjects:
        return this.renderAll().filter(el => el.props.children.props.alt);
      case filterSideProjects && !filterJobs:
        return this.renderAll().filter(el => !el.props.children.props.alt);
      default:
        return this.renderAll();
    }
  }

  render() {
    return (
      <div className='CardList'>
        {this.renderCollection()}
      </div>
    );
  }
}

export default CardList;
