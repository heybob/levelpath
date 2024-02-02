import { processWikiBirthsData, paginateData, birthYearSort } from "./utilities";
import { WikiResponse, Profile} from "./types";



describe('ProcessWikitBirhtsData Function', () => {
    it('It should return an array of type Profile', () => {
        let wikiBirthsData: WikiResponse = {
            births: [{
                text: 'Bob Filiczkowski, A good Engineer',
                pages: [{
                    description: 'A Good Front-end Engineer you should consider!',
                    extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
                    thumbnail: {source: 'https://bob.com/img'},
                    }
                ],
                year: '1975'
            }]
        };

        let expected = [{
            name: 'Bob Filiczkowski', 
            title: 'A Good Front-end Engineer you should consider!',
            extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
            thumbnail: 'https://bob.com/img',
            birthYear: '1975'
        }];

        let result: Profile[][] = processWikiBirthsData(wikiBirthsData, 1, 1);
        expect(result[0]).toEqual(expected);
    });
});

describe('Paginate Data Funciton', () => {
    it('It should paginate profile array data', () => {
        let profileArry = [{
            name: 'Bob Filiczkowski', 
            title: 'A Good Front-end Engineer you should consider!',
            extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
            thumbnail: 'https://bob.com/img',
            birthYear: '1975'
            },
            {
                name: 'Bob Filiczkowski 2', 
                title: 'A Good Front-end Engineer you should consider twice',
                extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
                thumbnail: 'https://bob.com/img',
                birthYear: '1975'
            }
        ];
        let expected = [{
            name: 'Bob Filiczkowski', 
            title: 'A Good Front-end Engineer you should consider!',
            extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
            thumbnail: 'https://bob.com/img',
            birthYear: '1975'
        }];

        let result = paginateData(profileArry, 1, 1);
        
        expect(result).toEqual(expected);

    })
});

describe('Birth Year Comparator', () => {
    it('It should return an array of years in descending order', () => {
        let profileArry = [{
            name: 'Bob F', 
            title: 'A Good Front-end Engineer you should consider!',
            extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
            thumbnail: 'https://bob.com/img',
            birthYear: '1975'
            },
            {
                name: 'Myles F', 
                title: 'A Good son',
                extract: 'Myles loves sports, and computer games',
                thumbnail: 'https://bob.com/myles',
                birthYear: '2014'
            }
        ];
        let expected = [{
            name: 'Myles F', 
            title: 'A Good son',
            extract: 'Myles loves sports, and computer games',
            thumbnail: 'https://bob.com/myles',
            birthYear: '2014'
            },
            {
                name: 'Bob F', 
                title: 'A Good Front-end Engineer you should consider!',
                extract: 'Bob Filiczkowski has been coding front ends for over 15 years and loving it',
                thumbnail: 'https://bob.com/img',
                birthYear: '1975'
            }
        ];

        let result = profileArry.sort(birthYearSort);
        
        expect(result).toEqual(expected);

    })
});