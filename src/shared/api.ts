export const getWikiData = (month: string, day: string) => 
fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`);