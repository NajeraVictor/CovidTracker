import React from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux' 
import { updateList, updateCountrySelected } from '../redux/actions'
import { List, ListItem } from "react-native-elements";

class SearchBar extends React.Component {

	constructor() { 
		super();
		this.state  = {
			query:'',
			newData:[],
			flaggy: true,
		};
	}
	
	componentDidMount() {

		//Make request
		this.props.updateList()
	}
	
	shouldComponentUpdate(nextProps,nextState){
		if(this.props.loading && this.state.query === '' && this.state.flaggy){
			this.setState({flaggy: false,newData: this.props.countryList})
			console.log('hola joto')
		}
		return true;
	}

	render() {
		return this.props.loading ? 
				<View style={styles.viewStyle}>
					<ActivityIndicator size='large'></ActivityIndicator>
					{this.props.error === '' ? null: <Text>{this.props.countrySelected}</Text>}
				</View>
				:
				//ListView to show with textinput used as search bar
				<View style={styles.viewStyle}>
					<TextInput
						style={styles.textInputStyle}
						onChangeText={text => this.SearchFilterFunction(text)}
						value={this.state.query}
						underlineColorAndroid="transparent"
						placeholder="Search Here"
					/>
					<FlatList
						data={this.state.newData}
						ItemSeparatorComponent={this.ListViewItemSeparator}
						renderItem={({ item }) => (
							<TouchableOpacity
								keyExtractor={item => item.Country}
								onPress={this.onPressAction(item.Country)}>
								<Text style={styles.textStyle}>{item.Country}</Text>
							</TouchableOpacity>
						)}
						enableEmptySections={true}
						style={{ marginTop: 10 }}
						keyExtractor={(item, index) => item.Country}
					/>
			  	</View>
		;
	}

	onPressAction = (key) => {
		console.log(key)
		// this.setState((state) => {
		//   //create new Map object, maintaining state immutability
		//   const selected = new Map(state.selected);
		//   //remove key if selected, add key if not selected
		//   this.state.selected.has(key) ? selected.delete(key, !selected.get(key)) : selected.set(key, !selected.get(key));
		//   return {selected};
		// });
	}

	ListViewItemSeparator = () => {
		//Item sparator view
		return (
			<View
			style={{
				height: 0.3,
				width: '90%',
				backgroundColor: '#080808',
			}}
			/>
		);
	};

	SearchFilterFunction(text) {
		//passing the inserted text in textinput
		const newData = this.props.countryList.filter(function(item) {
		  //applying filter for the inserted text in search bar
		  const itemData = item.Country ? item.Country.toUpperCase() : ''.toUpperCase();
		  const textData = text.toUpperCase();
		  return itemData.indexOf(textData) > -1;
		});
	
		this.setState({
		  //setting the filtered newData on datasource
		  //After setting the data it will automatically re-render the view
		  newData: newData,
		  query: text
		});
		
	  }
	
}

const styles = StyleSheet.create({
	viewStyle: {
		justifyContent: 'center',
		flex: 1,
		marginTop: 40,
		padding: 16,
	  },
	  textStyle: {
		padding: 10,
	  },
	  textInputStyle: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 10,
		borderColor: '#009688',
		backgroundColor: '#FFFFFF',
	  },
	  searchText: {
		flex: 0.1,
		borderColor: '#000',
		borderRadius: 20,
		borderWidth: 2,
		fontSize: 20,
		marginTop: 20,
		paddingHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#fff',
	},
	listContainer: {
		flex:0.9, 
		backgroundColor:"#000"
	},
	container: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		marginTop:40,
	},
});

const mapStateToProps = state => ({
	countrySelected: state.User.countrySelected,
	loading: state.User.loading,
	error: state.User.error,
	countryList: state.User.countryList,
});
const mapActionToDispatch = {
	updateList: updateList,
	updateCountrySelected: updateCountrySelected,
}
export default connect(mapStateToProps,mapActionToDispatch)(SearchBar)