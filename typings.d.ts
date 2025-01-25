interface Project {
    id: number;
    title: string;
    description: string[];
    languages: string[];
    category: string;
    picture: string;
    link?: string;
    github?: string | undefined | URL;
}