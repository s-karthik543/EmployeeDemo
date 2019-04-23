import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from './actions/HomeAction';

class Home extends Component {

    componentDidMount() {
        this.props.setEmployeeData();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.props.employees}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={this.renderItem} />
            </View>
        )
    }

    renderItem = ({ item }) => {

        return (
            <View style={{ paddingHorizontal: 16, borderBottomWidth: 1, paddingVertical: 10 }}>
                <Text >
                    {`Name: ${item.name}`}
                </Text>
                <Text>
                    {`Gender: ${item.gender}`}
                </Text>
                <Text>
                    {`Age: ${item.age}`}
                </Text>
                <Text>
                    {`Email: ${item.email}`}
                </Text>
                <Text>
                    {`Phone: ${item.phoneNo}`}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

const mapStateToProps = (state) => ({
    employees: state.home.employees
})

const mapDispatchToProps = (dispatch) => (bindActionCreators(HomeActions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Home)