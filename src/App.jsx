import React, { useState } from 'react';
    import { ThemeProvider } from './ThemeContext';
    import Header from './components/Header';
    import BlogList from './components/BlogList';
    import './App.css';
    import { Button } from 'shadcn-ui';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from 'shadcn-ui';
    import { Separator } from 'shadcn-ui';
    import { ScrollArea, ScrollBar } from 'shadcn-ui';

    const App = () => {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <ThemeProvider value={{ theme, toggleTheme }}>
          <div className={`app ${theme}`}>
            <Header />
            <div className="border-t">
              <div className="bg-background">
                <div className="grid lg:grid-cols-5">
                  <Sidebar playlists={playlists} className="hidden lg:block" />
                  <div className="col-span-3 lg:col-span-4 lg:border-l">
                    <div className="h-full px-4 py-6 lg:px-8">
                      <Tabs defaultValue="recent" className="h-full space-y-6">
                        <div className="space-between flex items-center">
                          <TabsList>
                            <TabsTrigger value="recent" className="relative">
                              Recent Posts
                            </TabsTrigger>
                            <TabsTrigger value="popular">Popular</TabsTrigger>
                            <TabsTrigger value="tags" disabled>
                              Tags
                            </TabsTrigger>
                          </TabsList>
                          <div className="ml-auto mr-4">
                            <Button>
                              <PlusCircle />
                              Add Post
                            </Button>
                          </div>
                        </div>
                        <TabsContent
                          value="recent"
                          className="border-none p-0 outline-none"
                        >
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <h2 className="text-2xl font-semibold tracking-tight">
                                Recent Posts
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                The latest posts from the community.
                              </p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div className="relative">
                            <ScrollArea>
                              <div className="flex space-x-4 pb-4">
                                {recentPosts.map((post) => (
                                  <PostCard
                                    key={post.id}
                                    post={post}
                                    className="w-[250px]"
                                  />
                                ))}
                              </div>
                              <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                          </div>
                        </TabsContent>
                        <TabsContent
                          value="popular"
                          className="h-full flex-col border-none p-0 data-[state=active]:flex"
                        >
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <h2 className="text-2xl font-semibold tracking-tight">
                                Popular Posts
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                The most liked and commented posts.
                              </p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div className="relative">
                            <ScrollArea>
                              <div className="flex space-x-4 pb-4">
                                {popularPosts.map((post) => (
                                  <PostCard
                                    key={post.id}
                                    post={post}
                                    className="w-[250px]"
                                  />
                                ))}
                              </div>
                              <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      );
    };

    export default App;
