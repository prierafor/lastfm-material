import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

class ArtistGrid extends Component {
    styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            width: '100%',
            overflowY: 'auto',
        },
    };

    tilesData = [
        {
            img: 'images/grid-list/00-52-29-429_640.jpg',
            title: 'Breakfast',
            author: 'jill111',
            featured: true,
        },
        {
            img: 'images/grid-list/burger-827309_640.jpg',
            title: 'Tasty burger',
            author: 'pashminu',
        },
        {
            img: 'images/grid-list/camera-813814_640.jpg',
            title: 'Camera',
            author: 'Danson67',
        },
        {
            img: 'images/grid-list/morning-819362_640.jpg',
            title: 'Morning',
            author: 'fancycrave1',
            featured: true,
        },
        {
            img: 'images/grid-list/hats-829509_640.jpg',
            title: 'Hats',
            author: 'Hans',
        },
        {
            img: 'images/grid-list/honey-823614_640.jpg',
            title: 'Honey',
            author: 'fancycravel',
        },
        {
            img: 'images/grid-list/vegetables-790022_640.jpg',
            title: 'Vegetables',
            author: 'jill111',
        },
        {
            img: 'images/grid-list/water-plant-821293_640.jpg',
            title: 'Water plant',
            author: 'BkrmadtyaKarki',
        },
    ];

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.styles.root}>
                <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={this.styles.gridList}>

                    {this.tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            actionIcon={<IconButton></IconButton>}
                            actionPoisition="left"
                            titlePosition="top"
                            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            cols={tile.featured ? 2 : 1}
                            rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default ArtistGrid;