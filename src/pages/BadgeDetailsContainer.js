import React from "react";
import api from "../API";
import PageError from "../components/pageError";
import BadgeDetails from "../components/BadgeDetails";
class BadgeDeatailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: [],
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  handleDeleteBadge = async () => {
    this.setState({loading: true, error: null});
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({loading: false})
      
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error})
    }
  }

  render() {
    if (this.state.loading) {
      return "Loading...";
    }

    if (this.state.error) {
      <PageError error={this.state.error} />;
    }

    const badge = this.state.data;
    return (
      <BadgeDetails
        modalIsOpen={this.state.modalIsOpen}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        onDeleteBadge={this.handleDeleteBadge}
        badge={badge}
      />
    );
  }
}

export default BadgeDeatailsContainer;
