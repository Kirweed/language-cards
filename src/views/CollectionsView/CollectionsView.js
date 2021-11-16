import React from "react";
import NoItems from "../../components/NoItems/NoItems";
import List from '../../components/List/List';
import Modal from "../../components/Modal/Modal";

class CollectionsView extends React.Component {
    state = {
        isModalOpen: false,
    };

    closeModal = () => {
        this.setState({isModalOpen: false,});
    };

    openModal = () => {
        this.setState({isModalOpen: true,})
    };

    submitModal = (e) => {
        this.closeModal()
        this.props.addCollectionFn(e);
    };

    render() {
        return (
            <>
                {this.props.collections.length ? 
                    <List collections={this.props.collections} openModalFn={this.openModal}/> 
                    : <NoItems action={this.openModal}/> }
                {this.state.isModalOpen && 
                    <Modal closeFn={this.closeModal} addCollectionFn={this.submitModal}/>}
            </>
        );
    }
}

export default CollectionsView;