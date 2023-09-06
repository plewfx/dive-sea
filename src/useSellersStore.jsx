import { create } from "zustand";

const useSellersStore = create(set => ({
    sellers: [
        {
            id: 1,
            img: 'https://s3-alpha-sig.figma.com/img/1745/ba04/820dca34df7ef46ff76e3bda6ea88140?Expires=1694390400&Signature=jrCXd8qogEavSlcbMNJKubQS-QkxqXSRrWiDsAdWHZCgj4oko7Jcb9tk1JW1CLRI6KFExVz86rddSSlizhtafsUdelic48y~rYpEoN~f5jfDCxnYmNIKXGJt9cCXV9yRB0f~xZoZ2tPwH2qdhG5Pw6bidHc670ZJfZeuASNPGAbauF3ITb~Et~cKJ-w1YlKjiD7USKDvYrhuIy0uouzSgQzZ-HA-KCpCZGvdfzqlz8Areu-QthgGzCyTEfKMgNopBg7KRVYK3mZ7rtVTOtXMa-kkWKlnVuqc5tYvuZhoTolTbHtTHKqmTWnJQ6MwDaUlIXOjjPKiYhYYekWjwMALrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Alex Ca.',
            username: '@Alexy',
        },
        {
            id: 2,
            img: 'https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1694390400&Signature=az3z4LoOCig0-wFZ7d~Lkjy53J4jYEnYAoConCsqYcNH6TtgRQVqE8FWx96Y~pyGQszKmSh8gHAvvix43Zi4WGqylyZPKE6SMmfTzrhMTpiYTDAjmU2t8Kh397vmLLN5CA2W9LstxgCnkTDVdAtxuAF-iEnJnxuUQzGNcQSpcCu4hxepCkIR5kuhjqUcTwCTIaiASJBz-vsh4vScDVu96bRHTOxkbT-KmKldvsiNpyX48DvJMSB7UnJ4IzyhqadI4rlTMY6uUcj2rGgf0KN-MZwN5EM8q-pFeTcNC3mfXEn-VArx0vciPf2tslyr8zCxg37D1R8EmSlBLKadw6Ln3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Juliya Sa.',
            username: '@JuliyaS',
        },
        {
            id: 3,
            img: 'https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1694390400&Signature=EjOE0HsuE~W1rBOYHOnrBPROiBE0K4YrEEN2kn8Xchrs9B9GwJ8Ah8FDSfkYnvmwOd60igtUdiG4AgkKzWtc2JKWGSjjAwVK8ohwnuRhgVThsnI3tmXUZlqKDcHnBmjuqDXeATxrzqoiTjoQyMjhFc8BGtUrdavcOwiNv~SEX9xQaUqGQYhIgXoEHyLozlXYW0D~d4gZcYo8JOuFoweTpdJvwSNfapqD1pCkUco2sPOjQC~rcYx7J1pWOBQAGzGGzL5MGyHQ6okkqnRt22H6LaRd7ASXwowtX6dNttFLFfO5S2r4d9uMrOd9HvVF9IOSOspa5-~VTtJFt3AxkZOPRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Juliya Sa.',
            username: '@JuliyaS',
        },
        {
            id: 4,
            img: 'https://s3-alpha-sig.figma.com/img/31dc/3d6d/c84e10304d9f8d206c80fbe3fb51c430?Expires=1694390400&Signature=TKwkszsVbXkQX-qMIVpxixXkI1~2RD5qTtvY3LpXANDsV9R2sSTDuQz~eM26VQuj4j06hfzJ3RWisBBhd5sMODK9x5n-ZwKwCRP4PNDGFCuFf3yE~-sB4FIs1loMnvb-1TUPPZxGfVVo7y4dTvf1XMo2sA-vmoLfP86yDTYYZC~~4jj2~oZgROZHuY57MSeLY73r1cSkLK7w9J~eZMIY7DLo04CNEYo6uEQna6nh~N0b8h9VqvlCKW6ZYT1rG3NiBuXXTak4bWPBr5YQV-~3JQUgctThyLtHvk7SuwPU8ZRPguGrtXqz9dTpjnLrhnrLiQ7ji8ccpNZEX~R0kACeHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Trevor Pu.',
            username: '@Alexy',
        },
        {
            id: 5,
            img: 'https://s3-alpha-sig.figma.com/img/31dc/3d6d/c84e10304d9f8d206c80fbe3fb51c430?Expires=1694390400&Signature=TKwkszsVbXkQX-qMIVpxixXkI1~2RD5qTtvY3LpXANDsV9R2sSTDuQz~eM26VQuj4j06hfzJ3RWisBBhd5sMODK9x5n-ZwKwCRP4PNDGFCuFf3yE~-sB4FIs1loMnvb-1TUPPZxGfVVo7y4dTvf1XMo2sA-vmoLfP86yDTYYZC~~4jj2~oZgROZHuY57MSeLY73r1cSkLK7w9J~eZMIY7DLo04CNEYo6uEQna6nh~N0b8h9VqvlCKW6ZYT1rG3NiBuXXTak4bWPBr5YQV-~3JQUgctThyLtHvk7SuwPU8ZRPguGrtXqz9dTpjnLrhnrLiQ7ji8ccpNZEX~R0kACeHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Trevor Pu.',
            username: '@Alexy',
        },
        {
            id: 6,
            img: 'https://s3-alpha-sig.figma.com/img/31dc/3d6d/c84e10304d9f8d206c80fbe3fb51c430?Expires=1694390400&Signature=TKwkszsVbXkQX-qMIVpxixXkI1~2RD5qTtvY3LpXANDsV9R2sSTDuQz~eM26VQuj4j06hfzJ3RWisBBhd5sMODK9x5n-ZwKwCRP4PNDGFCuFf3yE~-sB4FIs1loMnvb-1TUPPZxGfVVo7y4dTvf1XMo2sA-vmoLfP86yDTYYZC~~4jj2~oZgROZHuY57MSeLY73r1cSkLK7w9J~eZMIY7DLo04CNEYo6uEQna6nh~N0b8h9VqvlCKW6ZYT1rG3NiBuXXTak4bWPBr5YQV-~3JQUgctThyLtHvk7SuwPU8ZRPguGrtXqz9dTpjnLrhnrLiQ7ji8ccpNZEX~R0kACeHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Trevor Pu.',
            username: '@Alexy',
        },
    ],
    followed: {
        1: true,
        2: false,
        3: false,
        4: true,
        5: false,
        6: false,
    },
    toggleFollow: (id) =>
    set((state) => ({
      followed: {
        ...state.followed,
        [id]: !state.followed[id],
      },
    })),
}))

export default useSellersStore