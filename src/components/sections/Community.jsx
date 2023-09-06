import { Link } from "react-router-dom"

const CircleImage = ({ size, src, addClass }) => {
    return (
        <div className={`absolute bg-image rounded-1.2 ${addClass}`} style={{backgroundImage: 'url(' + src + ')', width: size + 'vw', height: size + 'vw'}}></div>
    )
}

const Community = () => {
  return (
    <section>
        <div className="container flex justify-center relative py-250">
            <div className="absolute top-[35%] z-20 flex flex-col items-center gap-35 text-center">
                <h3 className="text-black-18 leading-120 font-bold">Join The<br /><span className="text-grey-C5">Community</span></h3>
                <p className="text-18 text-black-12 leading-150 max-w-[50%] opacity-70">Our vibrant community is full of collectors, artists, and enthusiasts who share a passion for one-of-a-kind digital.</p>
                <Link to='community' className="text-15 text-white leading-120 mt-10 py-18 px-22 bg-black-0 rounded-12">Join  Our Community</Link>
            </div>
            <div>
                <div className='relative w-[57.7vw] h-[57.7vw] rounded-1.2 border-grey-D2 border-2 animate-spinCircle1'>
                    <CircleImage addClass='top-[0.5vw] right-[15vw]' size='3.57' src='https://s3-alpha-sig.figma.com/img/e5d9/68a5/edb3551077afa0cdb0e206b26afba2fd?Expires=1694995200&Signature=DLtDlcdak-goR5KSR33NzS6ClaHupjrT0I92mgy6DTThpBFklgz~ZKs3LXs5xlWGArdC1fM4wrHpEQd~IqLsWJ-vpbjHEEhysfJjBK0x9kfNkhk1~xZ5k-VkGHrYeplC7K50bfUmabsl8RjLPNfUA7MSWWUjNa087JZ2ND7blIP7TljM9zCErOJncIhw-B5gE9ZEnW76HZLuFSht~1aalsGojjDk2E7wbPYm4z00dZGcV9qtK-NxK7E7fbgD0iq9cMlSM78EVwxbSanQ7aE7l640cQZORpqEp60ClYukE5c~cq~IYaBdq6O8kH9hnRh0g6REKf6TMV-MdzBwe8IA5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='bottom-[15vw] right-[0vw]' size='4.51' src='https://s3-alpha-sig.figma.com/img/a26e/e7ae/08d12134fb7cc7358d9a9e53b5df50c5?Expires=1694995200&Signature=Nlpr-A9BKuAtHS5W-pAAo9KzqcmvYA~TyuhBNWekPdvK4LkR3Dqyyb9-5P7ssoSLaFqtt2ji1Q6K-CovefSiTgDWqEYAA7nTODrixrlbv1~zVmI4gKNrImaWvNJRKxSZSTRM1mrYd6T6eyKPhYlhYR9UMybsizvfBZ~uSF9Qgj4p9CZy5D4RtYbJcDqvYntuxdzRGqH0VgE6-4G8f2PWthus8lDRI7cffpFeYimBrJh47UxfBQRZt31L1-pbkayUNy1oRH6c51r90BW1KWDjhc9MPqBqWU3CXvEtayTcoxPMe1LA-hRYjFsd04Lo9-9elPNtbUHP3nVi~qeASxhhjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='bottom-[2vw] right-[12vw]' size='3.57' src='https://s3-alpha-sig.figma.com/img/6375/210d/21b45b882c5856955e24114fb8d01545?Expires=1694995200&Signature=aNcgJcMEtbgb28QtFAYYcZznq33Iy0jL569H48QzPGqohGrO2ZDAnj9KsjvGPxsqBjPUeKjsECPjO1XUv-khJQ5i8YKk7u15GMLgkWHQeEeaH7xFy3JpKvKuH06etTVipwmGSOctR00ZhkwVGRNyz-DaMf8o99X3a6de8cpk02SRYzH5jRs9goCeuqKumx2hpDh~wrdY70f6w9WNfEP9QI6rVS6eWrsW3Rki6aZY9ZWeL~JZ0lj1KAeXafkP9i8SFqkG2VEra3YmO8fH7pB-veMIAO3p2Hq1l1Xd0pwrVAjFiLfZtOnfscEv1ki~1L1dYVmcrmIW0WhtjEeCWkOU~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='top-[15vw] left-[1vw]' size='3.57' src='https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1694995200&Signature=YszXQ-78Xz7KbBf9xBEor4R-2xzFwTtXzzwezITpj1u4bUbtYSAuhxSNK5wURGA6T7fZnLvqJgwTgMbLqAM~SFFJhrORo29gS3TK4nKMdgbsPwFJ6TGxpB78KL9V4paFeENndksLlC5Q3UN2S12GsaOj4wX7EJo50Q~GmtJuBFzJC0ArK65RqwPIUoNrSLa63q6fBxLP9~eVBCTO2WPGyP6-9vTbA48s82o09HJyzdfnqC4m1XvK10yPDSsU9zGVIk6Jt5n30~MJ8Th8sauP4ZX4I7WLRNRv~JIPKdu1I8Sf8Gp-flvFftT40MxYIVGAOoY7jgG5ucNZ5NbJZ8O8NA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                </div>
                <div className='absolute w-[73.6vw] h-[73.6vw] top-[10vw] left-[6vw] rounded-1.2 border-grey-D2 border-2 animate-spinCircle2'>
                    <CircleImage addClass='top-[3vw] left-[15vw]' size='4.51' src='https://s3-alpha-sig.figma.com/img/9a2f/2607/0b55b2d9f877d5785b50035d2b49811a?Expires=1694995200&Signature=giJgBUU6CBslGABGmy0UrP7SD9BMTmZ4GJ3WdlukdJ5iFSNr~MvUELh4Sy5wQdiy0K25-FhA8xtUOG12GbprAvQjcminXMkFhBl3kppFR2IFRxtHFCbbhFn3YagmX3vu3Mz0cHqQ1zFlPR3sCJcnXxZQzZT0jb6pUyCxlTIfwoV28V~46S9TT98kQqT2ciIyv2~UeuZGaJtYXYfXlYPSsh88uHn65rEAADVafBiWl54H6AopeEW4KokDbVdSii66rrE38T6hHzxkHHnQ7hIaDmTfa7q4jC6ChEBT~dbWCF~~vEVZr2dNLnPFUUCsBj5V~W7OGHpaZ2iDzNCW5oD7ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='top-[5vw] right-[13vw]' size='3.47' src='https://s3-alpha-sig.figma.com/img/bf3e/5dfb/5d86cf53aacc4738cc8d725b4599ac91?Expires=1694995200&Signature=lhrWUbAKrYWHf2JSq-VWdPnfkEBbpJGcR7tK2ca9zxhVfOA1CcZa-O5kDYN2wAEl5BJitDzBZFwiV9aszer5wZfzuOU0i~SS7RZzHaKZkW8uotwRdTk3qo1Vz0pGYI2qD-sXkJRlIGgFpLrX4sooHc-scpirWtduex3KSKW0TALfIKK7gN5mTsI-YpOFuEx~osiNUfP-7KusVfUMT5rDlIMSdgQd2o47XNdPYKHzvj9B-E-gR7Jn1lC0R1jqRK93deo9r9UyJGnHZ1Yyos5BlpwvbfRcssamZFfXrp62iIUthootfH8mwk-7rdCDIVs2zm6BvN2-bOVid3LhJDstLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='bottom-[5vw] right-[13vw]' size='4.51' src='https://s3-alpha-sig.figma.com/img/cbc8/1a2e/a467ebb6e2cb17c8eec6fff76efad437?Expires=1694995200&Signature=gsNdQuDNqBWdToDtkg1a3leegt2GxAfBMKrLDEIhbc31SE0MHPWixmZQzte3mOuq9yXwoEH2t2eoKTW2dwadCOrPn8mwledRID~00I4iw4gabDQg1KqllGFZSE0c4Aq1k3DU3LRqzrxuWPQSiAqq3nEgh1YQmVr~Gk4nv59pTfDfis1w9o~tTp1VxAIQsxqFKYCAoRvbhtFcTjmqMnkF-5PDvm~hX~wWhh7EovZQ1SovsjzzGe6m1K-TKdSmMknJgK4tPhOmNbPCG5oI07kbWJOWnIzIt54Fi1hHBv0AJRF46R5XY78IwfF4T-GQ9IaKmBcAN~a94XijPBtWCLZB2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='-bottom-[2vw] left-[37vw]' size='3.57' src='https://s3-alpha-sig.figma.com/img/9a2f/2607/0b55b2d9f877d5785b50035d2b49811a?Expires=1694995200&Signature=giJgBUU6CBslGABGmy0UrP7SD9BMTmZ4GJ3WdlukdJ5iFSNr~MvUELh4Sy5wQdiy0K25-FhA8xtUOG12GbprAvQjcminXMkFhBl3kppFR2IFRxtHFCbbhFn3YagmX3vu3Mz0cHqQ1zFlPR3sCJcnXxZQzZT0jb6pUyCxlTIfwoV28V~46S9TT98kQqT2ciIyv2~UeuZGaJtYXYfXlYPSsh88uHn65rEAADVafBiWl54H6AopeEW4KokDbVdSii66rrE38T6hHzxkHHnQ7hIaDmTfa7q4jC6ChEBT~dbWCF~~vEVZr2dNLnPFUUCsBj5V~W7OGHpaZ2iDzNCW5oD7ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                    <CircleImage addClass='left-[2vw] bottom-[20vw]' size='3.57' src='https://s3-alpha-sig.figma.com/img/eeb4/b1bb/e9ba34c40ffad45676e58dd511db3910?Expires=1694995200&Signature=ncMkboVBiIWhK8Y-M67oWHpPqpK9KIYDSCGUzNqUUA9h4w~wlnXxEfNU3uYeUTHV6x60TkCfXH5jmhL8~p3gvNDCIarVWxsIrO2R9KYdMz6rwly5aSWDU-a5AohkNkA53c87jWNu5xomXEm7PCqPmNKI7XTTd2Se43mzTwnKkI8IrSRz-nV6ysIRuj~Zz8fWqfuH53mcPw2-6P1J1mL4D6yk71Pz4rwWcSf177rUFV9UgOVC0RqKFZLnBBYoKva-qOXp6gXMDfH4qWMVtCdsXRmd8ji05orNA4GUB4E~g9R~au1R6xRnoJnKcLHkSPrUvbB70qX1IuRsXHyhdQoDVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Community