import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

// components
import Todos from '../components/Todos';
import NoStarredTasks from '../components/NoStarredTasks';

// data
import data from '../../controller/data';

// redux
import { connect } from 'react-redux';

// style
import styles from '../styles/screenStyles/StarredTaskStyle';

const StarredTasks = ({navigation, fetchData}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const tasksData = await data();
      
          // Filter the tasksData array to only include items that are starred and not completed
          const filteredTasks = tasksData.filter((task) => task.starred && !task.completed);
      
          setTasks(filteredTasks);
        }
      
        fetchData();
      }, [fetchData]);

    //   when there are no starred tasks
    if (!tasks || tasks.length === 0) {
        return (
            <View style={styles.container}>
                <NoStarredTasks />
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recently Starred</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <Todos
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    starred={item.starred}
                    completed={item.completed}
                    date={item.date?.toDate().toString().slice(0,10)}
                    navigation={navigation}
                />}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    fetchData: state.fetchData
})

export default connect(mapStateToProps)(StarredTasks);