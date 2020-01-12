export interface BlogPost {
    _id: string;
    title: string;
    content: string;
    user: string;
    timestamp: Date;
    comments: [{
        user: string;
        content: string;
        timestamp: Date
    }];
}
