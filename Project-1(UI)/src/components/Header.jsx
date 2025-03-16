import React from "react";

const Header = () => {
  return (
    <header
      className="h-96 bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMVFRUXFxgVFxcYGBYVGBcYFRcYFhcVFxcYHSggGB0lHRcVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy8mHyUtLy0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABEEAACAQIEAwUGBAMGBAYDAAABAhEAAwQSITEFQVEGEyJhcTKBkaGx0UJSwfAUI6IVYnKSsuEHgsLxJDNjk8PSFyVT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EACsRAAICAwABAwMDBAMAAAAAAAABAhEDEiExIkFRBBPwFGGhMnGRwSNCgf/aAAwDAQACEQMRAD8A8qK1yKnKVzJVepJsQRXCKmK0slZqbsQZaWWpslcy12p2xFlpZamyUu7rtTtiDLXMtWClNK12puxBlrkVOVpjLWUbZA1NqVlpyYcny6TzrKs7ahttCdhNTraboasYS2QINTtA30+tHrwU8jvhRZabFTLoY3FK5b5igHENcJpGkK4wjNPsjcVwin2RrWM1DkGtSWl1rqLrTo1obDaGkVWvGrc1Ru70VmJDacK4K6K45ocomp8saVxBlHnTlE0SMaoZlpZalIpsU2IDGKtWLYpqinMYFOiKZTxbVRUVYxD1GgpE3ch0eIcq1KqU1RUqmtSMbCXd11LMkDqQPjpVo26VsAMpOwIPwNN1JHMn/sFvzr8DQ3E4fIxU6x9prTniVn839LfagWPYNcZl1BOm/QdaPJCCXpJ/p8uVye/j+1FDLXMlWMlLJStSvYgCU8JUgSnhK3U7YgNuurhideXUwB8Tz8quWbPM+4HQabk9APmdB5Pza6fGP9I2UemtY4mqRTGB56nzVSR84qK5g46jzKkD4iaKNbnU6nruapXUIOkz5b0OoSkVEwR3IlZiQQR8R9N6s5at4fMPa+IEn/m5OPX4129Y5geoG0HZl8vodDWqNCZytlQLUgroWnha6jEyFLA3IGvLp5VUYgExtVvENGkSIquFmlS+CrEm+kFy1zFMVKuKhHKrdjCAjN50KQyXOghrdcRCSAASeQGpPoOdaLD8Nd4zBlTbNHtcoTkT5nQEidSATmGFu3bZLNtQFIz3IzMdwWZ+agggjZSZgaUrJNR8B44t+QPwjs3duOMwCgwdTrG8wJPvNG+PdiO6YAXFkidBm3APL1/elT3ZKHKzLzzCWIjfNBmdDPPTpTf4a7bbPcZzmWBmGRCuniJYkHykjry0lcntdlkY+hqjL3uzl0TBRuQgkE+WogHyJB8qCYrh15JL23UAxJBiembY+6t7/E25JcF1CldsssQYX2cxMgDIBmgAkDkOu44m1laChJ8JAyHJEeFmyzOcAsysMmg0pqyMW4V5MTFTW0jU0bxHCUH8xJyRJRs0r/mAMaH2tYEiRJA97JJmZH0pt2KrpXUE1JPSk3QUyjQLQ8CuRSWnxT4sS0cFRX3p7NVPEOaJypAqNsrXW1rqGmQelPVT0pF9GvwWLZqcCqYqUXadGQto1r26rOlEbiVXZKscTzFMolK5lq0yUzJQ6jNyDJSyVYFukbddqduQBf0/WrGGtA76yD7hBkn0ArgX9P1ojwy/cs5nt5JNtlOZEcQ4ymMw38X3kaHHH4O2XuwffUx0mJHTTwj0A59TSuW4YyYknzqTF3mlo035CfpVviFx1uugFoKGYD+Th20Hmbck+tY0btfWD7zEAD1/SqrE6+n/AFCvQuyHZa5jjZuMLYw6syXioS0zZSxCqqLH5ATpodNtDL9isNjWuWkW1hrtu0jhrQLBs93E28txGbXSxbMiDJbU6RPPJFOiiGOUlZ5bYaSpnmOfnTrFzTrGo+HiX3ifgKWH4ZeN5rQt/wAy2+V1gSGVspHnqIqX+Bu2YF1MhzRBAnQ6gjlR2mKcKVkN1YI15aehJIPwikBofVfo1bXhnZI3MOt2bZAABJXXxM2X5QKBcXwgRfCoHjAkACYDUSSatMS8lT1afQDdidSZAPzH+1UxRK4DoI68h0PlUuA4Q9zy9wqbI0j0MCtcB2br0H0FFOE4J7jALJAzFiPwqMsk9PfprRF+yz6QeQ5DoK0HZrs5cRHYNBMgaaRKzPoRMenSppZF7F0cfyBeK3CUS3ByKhATVh4i0iD7THUZdJ/Fp4QPXFPqVaGYgOuYQ7bhcx0Y7STtssSK1XEOGXWCrIGWQmg0BMkkjXUyZ5a9RAHEcIuKCcpAAheczudPKfiOlTuarpbjwW+HMOskju2jOFETlIBBYgEHSIAjSJ2k1ZxOGuAIWV5KZlLkxKs/QLPhLDoZ1qLDYUh4jYEbDeCf1ijF7DOVSdcu0gGNQR86TLJ0tj9PwCXEQo4uP+H+WgAKkyB3TmMsDQBtTtqJBFDhjM2IstqALlsae0g7xYtkfit+uo9faL8R4e0smXTQiQB5jU9R+lK1ZRFW4Ce+DA7DLGkNrqWnr85mjjkQvJ9OVH4viClpDdf+WJADMCcx/CTqT1Vp3IgEAAZ2kUtc7yTDpZJ/xGxbI5k7Toeh5QTcvY19oSDJH8q0YPP8Ou3vHyu8Tv3r7MVW20WLbt/JsMPZQC4S1s+Q9CKog+HnZoNSMWdj6/oaYg+jf6TRHE35sBitue9IlbVq3pkBg92on30LFwk8tm5D8p8qeiaQu8ruIuHM3qfrUQJ6D4D7VLfBzHbc8h1pidCWrIblw5RrzP0FVs5htfw/9a1uexnDLN2y7XURit0gFkVoGRD00Ez8af2v4Vh7WFd7Vu2rSglUUfjWRI/e29a4txsUsqU9Tz+xOYb7j61LOp9TUvCsc1q9buoELI6suZFZZB0kEa/siCAaWMxTXLjuwXMzFjlRVEk8lAgUEfI+Qw/v4muhaU7fvmaeKckLbN89iq1y3R04eqt/C16bieBHIBWSu27BJq29mpcPbMVmocslIr/wemlVr1oijDVUuVriBHKwelomdBy3nz6Vdwb+KGTTJcOhO6Izjnpqtc/2/WrXCkBuqskSHExtNthNBJUhqnckVca9sye6U7keO5z1607imJXv7qm1b8N24JJuycrkAmLgExvtR272YtEe2/PkNt435a+6s/xBFa/dMQTduHrEuxPwpXG+D3cVT/0TcM4/iLSAWGe0NRltNdgmZkgsZIk6+g51dwnaHHOdcRiEEbgsDvtqY5n41U4RcTv7Odwi5iMzbKObGtj2huWLttTh8RauMiKhRYUstuf5u+pMjTf4UidJ1RRC2trqgD2ROGs4kvfa9JIIYQSXzhgzMTMTJJ3qXtc9nEXg1gsTmY3e808UyxTLup1/ewp1EgzzH1qfBgadSAD6ch6sPoTsaU1UrG3tCg/gO14sWVsnCoxVEXcw5OpZidQRGkbZjQJbD3R4goGYHTNzzb6+dEreA1LN5H5GrNu4BovUa/GhlkUE6Ojg3acvYH2ODIpmB57/AHojhLKg6KPn96VydNKt4MiKilJy8npQio+C9ibq6EIqiF0E8gATqf386K4NgLSHTUE+7mKD4sKF3OynQDmAfzedEMIi90sNmHXpoCRSJPpVCNofdSRmIEHT0/e1XMHgkMCKFZIbnRvhjTSXLvR7jrG0CONcBm73gAM76U9eFEqNBWyGHBGtPGFUcq39O27A/WtJL4PN+I8MJJZ9SABrJOm3Os7xDCEENl0J31jzG9eq8VwQg1h+M4YkZSxgGQI08+fkKVUoSouw5lkiee4sASAAZ9fvUWIvuNHtpIRU3vAlAAIIW4AeXLkaJYu0o1g6fv8AfrVTG4k3rql2loRJMAeyAo9Ij4GrsMiP6yCoC4q4uUoLaAC4W0NwyYiSXc8hyqDBBWuKpUQcw5/lbzq3xO2tt3SQ0ORKnMDvqCNxVHDYkI4aJjMY/wCVqojL3PPyRqwq/DLfQ/5jRDC9ke+BdcoBYgAtcJYgxACK0HUaGDqDtrQR+0K/kPxH2o3huJOgfI0C4IPvMyOjRInozDnRza9iaCl/2G8PvNhVZLUCXJbxFtQFXRlaCNOUiqfabity5h3V4IlT+P8AOvVqrcS4mLWUEEzJ5DoKFY3iouW2XKRoDMg7OtdtKqN+3C7roOskZh4RuObdfWnlhJ8I3/vfem2AMw33H1qRgJO+9HFGSZw/D/v508UtNP31qQLT0hUmeuJFR3kBqul2rFszXotnziiyscHNPTA1puFcEa4JkAek07ifBWtayCPhS/uxuhjxy1syV7DVQvWa0L281UMXhY2pikAoso8N4Rdv5hby+HKTJjfNH0NF+H9mrtp+9vPbRLauxMs2yNAAVSdTH+50M3Y3FW7bXu8dEkJGZgsxnmJPnRTtDxOw2Guqt62zFdAHUk6jYA61PknLfVeC7Fjhps/IF/tyx+Y/5W+1BDh1u3mUNGZmJIB0ElhK8uRJGmw3BqiBGvw8z/t9utS4PEtavC6qq5Ri0MMyk6+0BvROFeDFkcq2L3HOzTWLaubi3MyLcAXYK/5p221oPwbDHPJuW0EE+J4A1Ea1oOOdqMbibOQ2rYBYnPbVlYcyslj4TOo9KA21uKsukabgC2faEajT5UpRnXqKJTxp+kPNYtkqf4jD5pES+jT0GXU+uh9dSQ4Hw1c0m9ZI8nJ16kxvP61kLGDDMMpHtAwYB315x860eAYoAp0IG5/X7/ptJmuJZgqa8Gi4nhwFgXLQ23aNp8qo4PB7/wA2ydRs/r5VHikcpLK2jAMTyPi09+/vqlZ5hQTqNvfUbbbLlFJBu5a/9S0dD+LU6dIqtbvr/wD0X4P/APWhzXHDKSpA5k6ACNyTtSbEkgQLeXLbQ6YYHMLSi4c5Utq+YgzOvLkMrDx62bGxg+8Wcw9lfzclA6VzhTKs2gwJzEiJ5gdQOlR8Lxypa8XQAeIGfCNtKp4LBtn7wRqTu/Ix0Ty+VL1b6h8ZpOmwvfbK5B5TV7hd9ddY/XWq13BlhOn+Y6f01dTB2QDkDgxpLCPfpSJ453aKPuQcaNBh7wIqfPQS1bYfs/argJAgn9/CmwnOuojnjV8Y7E3BzoNi8AlwHT31PibZn2h8ajW5CkZlM7aARqRy3oNZSfUPjUFxnlnGsALdwoW0PrrPu3oVd4K5tm6r24BUBSSGJjeI8vpW6412fN+5nN4L0GSY1n84qqvY9coX+JAiPwdNvx/uaoxxcUdnzxnSZ5XjsI6DxEanzOw9KGc9xs35vynyr0ztf2ExSYfv7TLftpLOFBVwsasFkggc4M15y1htSUYABtY09k01WSyafgoMvmP6vtWmxOJW2IcxHhPOCNCCBJHTWs6MykMphlIIIOoI1B+NE+K45O77tCzGCviVVgFpMsHObaBoOumxZFJp2SZJTjJUuMbxvDu+UqNFTOZkEKTMxvtrG4Gu2tDrGBciQB4lJXcZgrqDAI1108yNKMf2qVtBmk3HLMoKqB4lZXZmDSQS2g5gaxoTFg+Ip3TB2OYIqwEQyEKquRwwyDKFBkEzLa+zRpR+RLyZkuxX8/n5/wCg/CYJ2AdYy5gJJyiRBIGaJ0jbaR1qrc3PiG/977Ua4bxRSCtw5faAhA6nO+c6F1gyYHlodqHvZDMSAFE6CR6fHr50xRvwdGctmpL8/Pgpm5H78z1qRb9WHwf795qL+GNFrJBbRZ9DcK7MWigLgknzI+lDeKcNFltNqLcJ7S2RbAckEeRP0oD2g4wLh8O1Urfbp4qS1/c1fZ7iCFYkTUXabiKBYkTXnLYquC9NasK2sJzetBa1iRNXuGvZa6ouuFEgjMJttBkpcP4Qds2sc6A4dcxiY0nr0p2Jwxynx8idunv8qe4WqJ1ljGXSbthwz+Ev5UBa04DWm3zKeQYe0QSBvzBjXUQ6OCA6spIJGcMNIMmGrV8FxdxMHbBusFy4jE5hGexbsMtoiyYMMxd5B0g6QdaKYxWWbd8XCn8nvbV28cSGtX7hsretXHUPbuK+sbGp1mcfS++1/PsXy+mjL1Ll+38nmt8A6jYcv3z3Px9KN9jFQ4l+8u2rSxJa6QqmGHh8REk9Ok0Kx2HNq9ctTJS49ueuRis/EA0zBYcPdVCSASfoTTpraIiD1kbvtE9gqGttafO5cC0Q4tjKJtnI0A6j1jltWZ4haBtMQrELBJgmBmAk+LqRU3HOzK2LYZbsk21uakKAG3XX2mHQanpWfs41rauouPlcQ4BKqwkHXmRp5cxsTK4SqFI6eG828v8ABPgbtsXFEGSRGh6/46Nq4Ak6DoQTr5rm0PrFZBscxgKIkxA5+XU++aNYXFGAAZPUax6dT5/DrUf1B6n0qo9Ha5YTDkPiLNqSPE4C92y6iy0t4GYE6axlO81gOzGILtcO+oMH1bQ0K7RWJtyPwkfGGn99AKo8FxgUxNTxpdKZpv0tnoHFrRyEZs3gdpmdGXQHz019aH2MCRhRekZe+7qNc2buw8xERA60KugmtLYH/wCqHljf/gpWSe7H4cX2159yF8OXKy+UBFj5/apnbIkhrtyJ0QSTtsJpti7IU+q/qP1q8jAbUUKcTpXGZFwzFM0gi6n+LNr79h/vRHPAOr/H9jzqv39c7+seOyiOSjX4fYe1sOtRY5xmiW2HXzrOWcTpvUr8UCasQB50uUA4y7ZcxNkHm3z+1RX+EwttpMMDG/Jjvp51Fa4olyCrA+lGMZcHdWNd1f8A1CtjFGTyS8GffhinrXG4OJkTy+gom8bzXbd0GmImk7Fa4q1nDYhWXwraYzvupA0rxXHL/Lf/AAN/pNer8f4NcxeHexaYKbjLLGT4UMnQHma874n/AMMsba9llf4r96xyVgR4YJwRVlV8Tu4lFbUbZmM5UB84JJ5AE7xJlOy+LFwW3TLMksxhEVQWa47clVQST5aSYFQX7aEwhORZCEjKWBOrsJMFoBIkxAEmKOMdgZSoEX3z+I7kn6KAAOQAgAcgK5bsEhv8P/UtGMFgVZmDB2ORmRVYKWZYbLJRt1DwI1bKOdX8NhVRHdsPeQjKid82ZSzmfZ7pJhEuc4BjTamxh2hbnyzM2bOo9R9anQwffV+/YgVXFr1qlQ1EOdomAMCnramu2qlUU5IQ2bC3d0qHEXarLfqK7dqho81J2ONypbd2qDPSF2hQbjYawuKCmT0j6VJf4ihUxOxG3Wfv8jQE3qaL0Uewl/Txk7ZpOz/G0VBaut3eQubVwp3yZbwi9YvWhq9p4B01Bot/bWGtAZWsPDLcWzYW/luPbE2jfvXtciHUW151hvCflzjr5H5TXbQE8xvz8j1UUiWKLdl6yyUaLjuXcu2rEl2PViZJPqT86NYFFtXEuoBnUhlJkiY00JigS4hNgD8R09P38ZtYrihXTL5e1006U7nuefkjkbWj6HeOcWxeLUWIRwSLkQAc2YgEH3xHnWR4rwu9abLcTKdRlJ1kESSJ0gHc1peyvELIu99iFuQBlCoRJYEMCSYgb7eVO7ccQtXkBt94CSGu5svjeRDKRJA9o5ZjbTQRI3UtYrh6OKL0Upu5GSwWLW34e5s3cxgtcFznoQuV1geup8tqu4PiatB7q1bjbuxcEk7TndtoJER86FqozDQ7jmOv+GorjAELB8MzqN/xcvID/lpeSFlOOdGh4tfRsPkCrmknN4paQQEImNIMR1+ONsyvijYjrzDT9BWmwmCW7ZDMWE8gRyLjmPKqnFsGiJmGYnMM2oEwGJbbfr8etL+w1Gw/1UJT1voY4Pi1uKBzrccPxKLgcgyyMTJUnXL3UZo3idK8i4ZjQjCAfiOnpW/TEAIoEsctpzH/AKtlLoB0/vxPlUs8ZZHL8kvEsfbAORddDp13qvb42hKIFOdzCjadtidPf5UQCJ3LEuwOQRbK51VswmVKlWMSZ86r4hMM+bM11lzxlIuEMhFotLZc0SG8MwemghauI2VSB93tEgYqdGUkEHcEGCDTBx5TsaG9ocOpuTh7Xhg+yuQTneNMo/CV/YruM7HcRtWmuXMHdUJmZyHw7AIoBmBczE+1oB0pmxnjyHhxMbVZtcODOC4zg7E6j3DYVg2uOGPgvbnl5+lajs9xsL4LwxA/KQqkD1mk5PUUY56+DSDhdpbotn8SypEiPIwaIdo7d+zawi20FwKHW5BJYBnUqRrrpO/Shlq2r3BcBut5tkA01GXKK1vCMWrghgSBGhjmzRy8qCPDskrpnnWF7UB9G0PMGQaLWeJjr0+lFe1/YmzfQ3LPguDUFYE+Rrys8TbD3u5uhwwgaxGw1GlOjJe5PLvg9T7NcT726Y2XQfrWu4reUhJgeZ032/X4GvK+znG7donNIkjUxz0+pFbDB8TS4Awca582oD6xBUczoDpzGugFKT82HOPigxZwdu6jIwHi0b3H2T7xPqB0ryvtt2VGHuyg8Lcuhr0zs5ZKDUk/v/vVbtvw5bigkkbdPtT8EqkibPG4niy4drbK6gZlaRz2g/CuXmuXQA5nJJHqzyZ67kDoIArWY3hKLAluu4+3lQ/+AVZOp25j8w8q9NRi+nnuckqMzeQiARv60NN/K0Eae+tZj8OsjQ7jmPtWX4nhonQ/EfaikmvBmOSfGWLaTtVlcK1UOC3ZYLy+Na+1bAFHDqsDK9XQHW9S7yqgapUZecn5UwncaLCIW2/e33Hxp5wp6/vNlpDGDp1+ZBj5V1sWOn7zZq3gp7+yIblph5+nqR9RUOarH8YJ2PL5MW/Wq7MpjlsCeXmY+FYMjt7o4Gp9sjryPLyNPXCzGo5fME/pT7WF8+X1Qt/tWG7RG2yJGpGupiY6mJE+kirnFLiLddbTl0DHKxXKSJ6T8/kNqjODgasPl0B6+dcvqoJ0k6/iH76/GsZycZe1lizi0CcyZJ0A8h1qRcT3ilVBGkyQORE7GaodyWANtY1YaMvMjQgnpRLhnDrkwBJy9V/Mv9730rljG2lVBjsPwdruJOitlyuZ8MBXWSDuD5jWoP8AiFwTurqlVVFcs6RqSpMiTvmHOfnT04Zd0m0YkSc6cjJ2bpQLE2xAy+/WffSZxe12PxZI1rRp+Fdnf/CZ8xMFBoNfHmbRfxDWNxsd6xnGGdwAlq+CrgybbdG2itF/+Qb9lFsjD4UotvJ4gxLA5ZLeIS3gGsdawncs85QD4l/EvMOeZE7H4UO86afgYsGNTU15JrWCuZgwtXQNQR3b6Eg7abfTbpJi3xDGqgT+cUChAvdt7IGULOWYgAe6gVrB3VM5Rsd3SD4SYIza7fKpuJ2MirdtHPYfRGJGZHUDNZuxAzjcEQGUhhuQF2vDHSi31G0wWDuXED5CDAkFWBOg5RSxPA7hXwqdzpB8vKs9wPiTJlnLBVeY6Dzra27asoKxBkkfCkTiOxya8mZbhbgElHAA3KMB7yRpQ/HW7p3uORGozsQR6TWxx/DcivIIA0O2hBgzrOnPShNzCZSyuMpEggiCCNNQedT9iypSUl0xd0oHbrmPLzq7w7hbXYNsjUkAazpqToNo19xojjuC5mLCNzzHWivZC5awrB7oDAd4Cmh/8xSkiQRzO9OxzhJ+oTmWSMU4/P8ABWwN9sKct0iCwQrrIJk7EeVb7h3F9BLErI/fnWI7T4m3iO/xNg2rao9mLZZVYAW+7AVdOa8h5cqh7O8UzMLdwjcQZHWgyqKfpC+nlOUfX8/2PVP7TQMozXNdfYXb/wByoePdk8NiwLhzBo3CKT/qFBrWHZmUnlzkbfGthwy+AAOkfSlDWvg8y492RNtQbRuNrqGRVgRGkO07mZp3BMBftlWglddJ8j11+M16tigrDlQ65YA2Aj/au1O3ZU4JiySAak7a44JbE84FT2Ao10FYX/iTx+1K286zmHPoabj/AKkJy9iMx+KWV328vvVV7gYHfl9R51FccMqkGRH6+dSWk0Pp1HUV7MVw8Sbdg7GLqPWhfEMMCpo3iEk8viKpNZkEafEU0FOjIcKEXorWB6zyYcrfo8DQY1SoZlduwGDTgaYKcBRIxokVqfmqKnLWgNCIrlWrOFZxpVd1IMHesZyHWrjD2Z+vX7mpRffp8v7uX6VCq/p+tPS1rtyPyUk/KaG2a4xfklDncz86WJDEnwtueRqqy1vuBWgU1VG2nN3GmixPeiQur+zG3pXN8Bb1apGY4UrBNVPtHcEchWn7P4d3dmVSQqEsYMAFgBJ5c/gelBL+wruGubjqI92ZTB6iQD7hSJclQ5f8mNP9jdXcSMuQagQJ011BkCJGo68zpJNecrsKIoBI9aywGgrUgP6STidoEyRy3g/pvTuy1oF7ge6bAKx3gS65UtbuqIW0CxMsOmk68jQx7aKPf8zVIW5UmNMyjykh4HqYb/KelBNXwqwuumzuYFLdu8f7RfElrRUW2sYu2JzI5bNdBUEBCNY9resZhr9xFdBmyXAodY3yHMpEjRlMwd9SNiQVas67Dn9DVcilaUP3sMJaIVefhWDBEiN/L9Nq1PAOMNb7tujTqNJXKR+/KsThWtSReV2TISuQqGFw2xkMtplnLmHQeVS2SAixESfotZpYMp0rR643Ey83PDqQ0AGBBEAAnbTmaD8duNeY3CACY0UQAAIG/oPWsjwfivdt5VrcPxO1chQQI3FIyQofhybMk4Pgj4s43mNKvrwAOshT8DTXVZgetFcBft5rSvop0PvJAJ20mJjlNSuJXs2rMjxPsiYJyn4EUCHDDauLofaX6ivUsS9olwmqz4fSaq8I4dbZ2aNRljX82dTpsdDz9dxWJdoLbnQVwzGuAAZo1Yx5Vo1kx9BT07PAszLoJ01mI0MzqTpM8/nTr3Cgk3H20nkBoANec/pWvwYmg3h7wyzXL+JAEnTT9Ky+L40EWUBPmNues+4ietA8ZxJ3uOraqrIo/KxIYuI5x4d+tHjxTm+E2f6rFhT2ffj3/OknbHtqLYKWpJ8gaFcO7PriuHYnE3ILsHud4bas9prN4pbt23LDKHhi2h0HpQDE9mVuAgMS5zICZ1dM5zNrs3gEDaCRvV9e0GIw1vuEwiNZZciAXLpzsCtxrl0TluKbmpGVREpIUkF/2ZxXgmx/XYcrai/88PReLcGVrNhbBXwwtsd47BbQQEoSZg5yN/zKJ1ArN4fD3HVyiMwVczEKTAzAa/vYE7AxW4dfxdyx/wCIZnM52zZSzFojUCSBmMCcq6wBRexgQAQTDSqsROoMNl89Qp9Vr0sUZRj087PnxuVoBlGnY79DUaWzrofga0trBoGG58eXXyE8qD22puwEGp+ABfwfjmP3NPyGieNWW+H0qEZRpRIJmWWpAKjWpAaBMYxRXa4TXJrbMLOHxjJIGxqJnzGaiJrqGs2O19y7ZXT4frWj4JbNv+YhhirrMA6OpB0IIrN2blEMNj2UQIjpr8taLjQqWy8EF/CHMVGtdxdq8u7MBOniMenlVmziQGzET13+9WeI8QRlIGs+ta0Zb9wDfu3Mo8bc/wAR8qjwt+5LeNvZ6n8y1JfcRsPn96jskQTA19fvSWuj2/SWLeJfMPG245nrVDEXYG+vKpbmIC8hPLfl76oPdncD+r71jZ0It9Irrben6mreF4ndWxcsBotu6OywNSquBr8P8oqncfyHz+9R97HIcjz5T5+ZoKRUi2jfQ/Q1QuPT/wCJjkPn96rvdH5R/V96GTNiiRrn0X/SKlw906erfRKptd/uj+rlp1rnfRyHP83OPPyFLbGONqgjdvkA/AVSt4x0MqTURvTyHz+9MmlTdhQjqjY8P7WNmIudT9a1uC4sGURcIHSSK8jNwbwP6vvUiY1xoPq33pMoWPjOj2JeJAgzdkeZJqqeP2rbA95rPLTnXlH9o3Np/wBX3qA4gzOk+rfeg+2H939j0rH/APEVLakWiSTvqdfWsvje2mJumCxiAQJOkqPvWWYj8q/1feud9/dXl+bkI6+VaoJGObZpLuOvsp/nXOQjO0QBoInYdKqfxl+TN64dGPttuFMHfeqdniECIH9X3qUcRX8o+fMR1pliHCPwRvxLEDa9cGpI8bbnc7129xS+GIF65pI9ttp232qDEYgH8I/q+9LfXKNdfxfeiVnaQ+Eej9m8TcNlZdjpzYnppR3hmIZrxBYmFJgk7iNfpQHs3/5S6Dbz+9EMA5S47iJ2HvInevST9J5M4Jthu5eOYCec0Ow9vQGoMRxFw5MroBGg3qseJnYRW05A44aJ2Wsaup91B751omt0tJNU71vWmUcZkV2lSpNlDR2aaTSpVjZyQ3NXM9KlQ2FQ9b1TLiKVKt2YLiiQYmk1+lSrdmZoivdu12ydPWlSrL6dNcKV15JNMmlSoRyRHcqs5rlKuYUSMmmE0qVKY5DSaaTXaVLYSRyaRNKlQBHJrs0qVYbRw000qVYzkKmlKVKsNGlTSpUqxnD7KFmAFaAYRVXXelSqnAuNicr7RouGcQS3bAqS5xedq5SqxEjiiA3y1TWBXaVNQpoJ4anXbetdpVoo/9k=')",
      }}
    >
      <h1
        className="text-4xl font-bold
      bg-black/50 rounded-lg backdrop-blur-sm p-4"
      >
        🚀 Welcome to My Website
      </h1>
    </header>
  );
};

export default Header;
