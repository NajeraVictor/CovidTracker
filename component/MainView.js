import React from 'react';
import { StyleSheet, View, Button, FlatList,Text, TextInput } from 'react-native';
import SearchBar from './Searchbar';
import { connect } from 'react-redux';

class MainView extends React.Component {

	render() {
		return (
            <SearchBar style={{backgroundColor:"#000"}}/>
		);
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
});

const mapStateToProps = state => ({
    User: state.User
});
export default connect(mapStateToProps)(MainView)