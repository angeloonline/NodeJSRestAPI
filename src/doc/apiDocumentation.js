export default {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Node.js Posts REST API',
    description: 'Posts management API',
    termsOfService: 'http://api_url/terms/',
    contact: {
      name: 'AppuntiSoftware.it',
      email: 'info@appuntiSoftware.it',
      url: 'https://www.appuntiSoftware.it/'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers: [
    {
      url: 'http://localhost:4000/',
      description: 'Local server'
    },
    {
      url: 'https://www.devnode.it',
      description: 'Testing server'
    }
  ],
  security: [
    {
      ApiKeyAuth: []
    }
  ],
  tags: [
    {
      name: 'CRUD operations'
    }
  ],
  paths: {        
    '/posts/findById?': {
        get: {
          tags: ['CRUD operations'],
          description: 'Get post by Id',
          operationId: 'getPostById',
          parameters: [
            {
                name: 'postId',
                in: 'query',
                schema: {
                  $ref: '#/components/schemas/postId'
                },
                required: true,
                description: 'id of the post'
            }
          ],
          responses: {
            '200': {
              description: 'Post was obtained',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Posts'
                  }
                }
              }
            },
            '400': {
              description: 'Missing parameters',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error'
                  },
                  example: {
                    message: 'Id is missing',
                    name: 'missing_parameters'
                  }
                }
              }
            }
          }
        }
    },
    '/posts/{postId}': {
        get: {
          tags: ['CRUD operations'],
          description: 'Get post by Id',
          operationId: 'getPostById',
          parameters: [
            {
                name: 'postId',
                in: 'path',
                schema: {
                  $ref: '#/components/schemas/postId'
                },
                required: true,
                description: 'id of the post'
            }
          ],
          responses: {
            '200': {
              description: 'Post was obtained',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Posts'
                  }
                }
              }
            },
            '400': {
              description: 'Missing parameters',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error'
                  },
                  example: {
                    message: 'Id is missing',
                    name: 'missing_parameters'
                  }
                }
              }
            }
          }
        },
        put: {
        tags: ['CRUD operations'],
        description: 'update a post',
        operationId: 'updatePost',
        parameters: [
            {
                name: 'postId',
                in: 'path',
                schema: {
                    $ref: '#/components/schemas/postId'
                },
                required: true,
                description: 'id of the post'
            },
        ],        
        requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Post'
                }
              }
            },
            required: true
          },
        responses: {
            '200': {
            description: 'Post was updated',
            content: {
                'application/json': {
                schema: {
                    $ref: '#/components/schemas/Post'
                }
                }
            }
            },
            '400': {
            description: 'Bad Request: Missing parameters',
            content: {
                'application/json': {
                schema: {
                    $ref: '#/components/schemas/Error'
                },
                example: {
                    message: 'id is missing'
                }
                }
            }
            }
        }
        },
        delete: {
        tags: ['CRUD operations'],
        description: 'delete post',
        operationId: 'deletePost',
        parameters: [
            {
                name: 'postId',
                in: 'path',
                schema: {
                    $ref: '#/components/schemas/postId'
                },
                required: true,
                description: 'id of the post'
            },
        ],
        responses: {
            '200': {
            description: 'Post was deleted',
            content: {
                'application/json': {
                schema: {
                    $ref: '#/components/schemas/Post'
                }
                }
            }
            },
            '400': {
            description: 'Bad Request: Missing parameters',
            content: {
                'application/json': {
                schema: {
                    $ref: '#/components/schemas/Error'
                },
                example: {
                    message: 'id is missing',
                }
                }
            }
            }
        }
        }
    },
    '/posts': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get posts',
        operationId: 'getPosts',
        parameters: [
        ],
        responses: {
          '200': {
            description: 'Posts were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Posts'
                }
              }
            }
          },
          '400': {
            description: 'Missing parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'something went wrong'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Create post',
        operationId: 'createPost',
        parameters: [

        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Post'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New post was created'
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'Post creation failed'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
        postId: {
         type: 'string',
         description: 'Post identification string',
         example: 'Id of the post'
       },
       title: {
        type: 'string',
        description: 'Title of the post',
        example: 'Title of the post'
      },
      description: {
        type: 'string',
        example: 'Description of the post'
      },
      date: {
        type: 'string',
        format: 'date-time'
      },
      Post: {
        type: 'object',
        properties: {
          title: {
            $ref: '#/components/schemas/title'
          },
          description: {
            $ref: '#/components/schemas/description'
          },
          date: {
            $ref: '#/components/schemas/date'
          }
        }
      },
      Posts: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Post'
            }
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          },
          error: {
            type: 'string'
          }
        }
      }
    }
  }
}