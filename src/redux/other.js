import { connect } from 'react-redux';

const mapStateToProps = state => ({
    nightMode: state.nightMode,
    notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
    toggleNightMode: () => dispatch({type: 'TOGGLE_NIGHT_MODE'}),
    toggleNotifyMe: () => dispatch({type: 'TOGGLE_NOTIFICATION'})
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);