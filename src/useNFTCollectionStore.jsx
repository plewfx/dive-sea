import { create } from "zustand";

const useNFTCollectionStore = create(set => ({
    collections: [
        {
            id: 1,
            img: 'https://s3-alpha-sig.figma.com/img/1745/ba04/820dca34df7ef46ff76e3bda6ea88140?Expires=1694390400&Signature=jrCXd8qogEavSlcbMNJKubQS-QkxqXSRrWiDsAdWHZCgj4oko7Jcb9tk1JW1CLRI6KFExVz86rddSSlizhtafsUdelic48y~rYpEoN~f5jfDCxnYmNIKXGJt9cCXV9yRB0f~xZoZ2tPwH2qdhG5Pw6bidHc670ZJfZeuASNPGAbauF3ITb~Et~cKJ-w1YlKjiD7USKDvYrhuIy0uouzSgQzZ-HA-KCpCZGvdfzqlz8Areu-QthgGzCyTEfKMgNopBg7KRVYK3mZ7rtVTOtXMa-kkWKlnVuqc5tYvuZhoTolTbHtTHKqmTWnJQ6MwDaUlIXOjjPKiYhYYekWjwMALrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Alex Ca.',
            author: 'Alex',
            price: 8456,
            change: '+ 27.78%',
            floorPrice: 3.5,
            owners: 2200,
            items: 500
        },
        {
            id: 2,
            img: 'https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1694390400&Signature=az3z4LoOCig0-wFZ7d~Lkjy53J4jYEnYAoConCsqYcNH6TtgRQVqE8FWx96Y~pyGQszKmSh8gHAvvix43Zi4WGqylyZPKE6SMmfTzrhMTpiYTDAjmU2t8Kh397vmLLN5CA2W9LstxgCnkTDVdAtxuAF-iEnJnxuUQzGNcQSpcCu4hxepCkIR5kuhjqUcTwCTIaiASJBz-vsh4vScDVu96bRHTOxkbT-KmKldvsiNpyX48DvJMSB7UnJ4IzyhqadI4rlTMY6uUcj2rGgf0KN-MZwN5EM8q-pFeTcNC3mfXEn-VArx0vciPf2tslyr8zCxg37D1R8EmSlBLKadw6Ln3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Alex Ca.',
            author: 'Alex',
            price: 4780,
            change: '+ 27.78%',
            floorPrice: 3.5,
            owners: 2200,
            items: 500
        },
        {
            id: 3,
            img: 'https://s3-alpha-sig.figma.com/img/1745/ba04/820dca34df7ef46ff76e3bda6ea88140?Expires=1694390400&Signature=jrCXd8qogEavSlcbMNJKubQS-QkxqXSRrWiDsAdWHZCgj4oko7Jcb9tk1JW1CLRI6KFExVz86rddSSlizhtafsUdelic48y~rYpEoN~f5jfDCxnYmNIKXGJt9cCXV9yRB0f~xZoZ2tPwH2qdhG5Pw6bidHc670ZJfZeuASNPGAbauF3ITb~Et~cKJ-w1YlKjiD7USKDvYrhuIy0uouzSgQzZ-HA-KCpCZGvdfzqlz8Areu-QthgGzCyTEfKMgNopBg7KRVYK3mZ7rtVTOtXMa-kkWKlnVuqc5tYvuZhoTolTbHtTHKqmTWnJQ6MwDaUlIXOjjPKiYhYYekWjwMALrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Alex Ca.',
            author: 'Alex',
            price: 8456,
            change: '+ 27.78%',
            floorPrice: 3.5,
            owners: 2200,
            items: 500
        },
        {
            id: 4,
            img: 'https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1694390400&Signature=az3z4LoOCig0-wFZ7d~Lkjy53J4jYEnYAoConCsqYcNH6TtgRQVqE8FWx96Y~pyGQszKmSh8gHAvvix43Zi4WGqylyZPKE6SMmfTzrhMTpiYTDAjmU2t8Kh397vmLLN5CA2W9LstxgCnkTDVdAtxuAF-iEnJnxuUQzGNcQSpcCu4hxepCkIR5kuhjqUcTwCTIaiASJBz-vsh4vScDVu96bRHTOxkbT-KmKldvsiNpyX48DvJMSB7UnJ4IzyhqadI4rlTMY6uUcj2rGgf0KN-MZwN5EM8q-pFeTcNC3mfXEn-VArx0vciPf2tslyr8zCxg37D1R8EmSlBLKadw6Ln3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Alex Ca.',
            author: 'Alex',
            price: 4780,
            change: '+ 27.78%',
            floorPrice: 3.5,
            owners: 2200,
            items: 500
        },
    ]
}))

export default useNFTCollectionStore