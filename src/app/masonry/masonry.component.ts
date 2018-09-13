import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-masonry',
    templateUrl: './masonry.component.html',
    styleUrls: [ './masonry.component.css' ]
})
export class MasonryComponent implements OnInit, AfterViewInit {

    cards = [];

    constructor() { }

    ngOnInit() {
        this.cards = [
            { title: '1', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '2', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '3', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg'},
            { title: '4', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg'},
            { title: '5', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg'},
            { title: '6', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg'},
            { title: '7', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg'},
            { title: '8', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '9', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '10', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '11', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '12', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '13', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '14', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '15', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '16', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '17', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '18', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '19', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '20', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '21', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '22', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '1', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '2', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '3', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '4', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '5', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '6', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '7', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '8', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '9', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '10', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '11', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '12', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '13', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '14', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '15', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '16', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '17', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '18', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '19', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '20', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '21', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' },
            { title: '22', desc: 'Lorem Ipsum is simply dummy'
            , imgUrl: 'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg' }
        ];
    }

    ngAfterViewInit(): void {
        this.setGridRowEndCards();
    }

    setGridRowEnd(item, index) {
        if (!item && index > -1) {
            const allItems = document.getElementsByClassName('card');
            item = allItems[index];
        }
        const target = document.getElementsByClassName('container')[0];
        const rowHeight = parseInt(window.getComputedStyle(target).getPropertyValue('grid-auto-rows'), 10);
        const rowGap = parseInt(window.getComputedStyle(target).getPropertyValue('grid-row-gap'), 10);
        const rowSpan = Math.ceil((item.querySelector('.title').offsetHeight +
        item.querySelector('.desc').offsetHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = 'span ' + (rowSpan + 1);
    }

    setGridRowEndCards() {
        const allItems = document.getElementsByClassName('card');
        for (let x = 0; x < allItems.length; x++) {
            this.setGridRowEnd(allItems[x], -1);
        }
    }
}
