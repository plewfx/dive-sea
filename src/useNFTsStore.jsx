import { create } from "zustand";

const useNFTsStore = create((set) => ({
    NFTs: [
        {
            id: 1,
            img: 'https://s3-alpha-sig.figma.com/img/1745/ba04/820dca34df7ef46ff76e3bda6ea88140?Expires=1694390400&Signature=jrCXd8qogEavSlcbMNJKubQS-QkxqXSRrWiDsAdWHZCgj4oko7Jcb9tk1JW1CLRI6KFExVz86rddSSlizhtafsUdelic48y~rYpEoN~f5jfDCxnYmNIKXGJt9cCXV9yRB0f~xZoZ2tPwH2qdhG5Pw6bidHc670ZJfZeuASNPGAbauF3ITb~Et~cKJ-w1YlKjiD7USKDvYrhuIy0uouzSgQzZ-HA-KCpCZGvdfzqlz8Areu-QthgGzCyTEfKMgNopBg7KRVYK3mZ7rtVTOtXMa-kkWKlnVuqc5tYvuZhoTolTbHtTHKqmTWnJQ6MwDaUlIXOjjPKiYhYYekWjwMALrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 3,
            img: 'https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1694390400&Signature=EjOE0HsuE~W1rBOYHOnrBPROiBE0K4YrEEN2kn8Xchrs9B9GwJ8Ah8FDSfkYnvmwOd60igtUdiG4AgkKzWtc2JKWGSjjAwVK8ohwnuRhgVThsnI3tmXUZlqKDcHnBmjuqDXeATxrzqoiTjoQyMjhFc8BGtUrdavcOwiNv~SEX9xQaUqGQYhIgXoEHyLozlXYW0D~d4gZcYo8JOuFoweTpdJvwSNfapqD1pCkUco2sPOjQC~rcYx7J1pWOBQAGzGGzL5MGyHQ6okkqnRt22H6LaRd7ASXwowtX6dNttFLFfO5S2r4d9uMrOd9HvVF9IOSOspa5-~VTtJFt3AxkZOPRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 2,
            img: 'https://s3-alpha-sig.figma.com/img/9a2f/2607/0b55b2d9f877d5785b50035d2b49811a?Expires=1694390400&Signature=GMrOQKATwq-ovkX3kUaujGOgKheoGTSvN1JaOiUHT5kKecCHJC6gcVjHybIfiYD6wKhsncgWCbJEC-HnFRoShtLktA2oIFHAU1qpALsfMlZfX3Evw458iPgEQGdBeNg6OP5pqDmEZBVP8Ex5RzbUvte3zxD82ataq31~Yy~6K0UCfdLoHUL60devaGbGTitsIW~Bd14n5dFJ4YbkQ6EV774ddMSVjO7AjNadSWH6nEKWzo1o6epwR3hbvBQ1tTP~e4KAHv34u-D1Zs0qh2c7bkFogEwTAyZHK3tPtPI4UN1SqU~5OG6W-3sFyNmg-S6PHjfYt2al0N~d0M4hhiB8sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 4,
            img: 'https://s3-alpha-sig.figma.com/img/31dc/3d6d/c84e10304d9f8d206c80fbe3fb51c430?Expires=1694390400&Signature=TKwkszsVbXkQX-qMIVpxixXkI1~2RD5qTtvY3LpXANDsV9R2sSTDuQz~eM26VQuj4j06hfzJ3RWisBBhd5sMODK9x5n-ZwKwCRP4PNDGFCuFf3yE~-sB4FIs1loMnvb-1TUPPZxGfVVo7y4dTvf1XMo2sA-vmoLfP86yDTYYZC~~4jj2~oZgROZHuY57MSeLY73r1cSkLK7w9J~eZMIY7DLo04CNEYo6uEQna6nh~N0b8h9VqvlCKW6ZYT1rG3NiBuXXTak4bWPBr5YQV-~3JQUgctThyLtHvk7SuwPU8ZRPguGrtXqz9dTpjnLrhnrLiQ7ji8ccpNZEX~R0kACeHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 5,
            img: 'https://s3-alpha-sig.figma.com/img/dacb/64a0/16a24a227683ad0f923b4b44169d9195?Expires=1694390400&Signature=BcC4cXJC~zG41o8KnDeXrGMfo2Da5ZrjD-bwvqLV1qXes43cn7UttEUCt2e2GxN9BIosTsTfTahpi73kpS7Fwo1ltQBdSH6dDDPTmds-uhkkPq8hlLqEIRROxLKhXUNn4KZcLySs7kBTMLR3lKTKb1prkuJElhnYnueX5OKQ0NBbexEXadRL6EnUyURlpwUGaqRD-6J7L6K4EBLHGBQhuMYYeqMgweMVAlsojAZ~Pl-jIvCuDVfOE4Bs8Ti~lqqlZQkLjSpgGGo9FMXdxQVj2B6AoAFun3cSKbQOaZfntYSqb3dFuL-yCujiM8yQVqQedV54ynvRhFiUDsJGEm9bPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
    ]
}))

export default useNFTsStore