import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryButton from './CategoryButton';

class CategoryList extends Component {
    constructor () {
        super();
        this.changeSelection = this.changeSelection.bind(this);
    }

    changeSelection(id) {
        this.props.updateParent(id);
    }

    render() {
        return <div>
        {
            this.props.categories.map((ob) =>
                <CategoryButton
                    name={ob.name}
                    id={ob.id}
                    key={ob.id}
                    selectedId={this.props.selected}
                    click={this.changeSelection}>
                </CategoryButton>
            )
        }
        </div>
    }
  }

export default CategoryList;
