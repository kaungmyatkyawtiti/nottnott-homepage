import { GridItem } from '@/components/GridItem'
import { popularPosts } from '@/constants'

const PostPage = () => (
  <main title="Posts">
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h3 className="text-xl font-semibold mb-4">Popular Posts</h3>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-6">
          {popularPosts.map((post, index) => (
            <GridItem
              key={index}
              description={post.description}
              thumbnail={post.thumbnail}
              href={post.href}
            />
          ))}
        </div>
      </section>
    </div>
  </main>
)

export default PostPage
