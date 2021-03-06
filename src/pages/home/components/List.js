import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const { list, page, getMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link key={index} to={'./detail/' + item.get('id')} >
                            <ListItem>
                                <img className='pic' alt='' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.home.get('articleList'),
        page: state.home.get('articlePage')
    }
}
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapStateToProps, mapDispatch)(List);