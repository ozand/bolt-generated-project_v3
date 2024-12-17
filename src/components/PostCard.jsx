import React from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'shadcn-ui';

    const PostCard = ({ post, className }) => {
      return (
        <Card className={className}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.author}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post.excerpt}</p>
          </CardContent>
        </Card>
      );
    };

    export default PostCard;
