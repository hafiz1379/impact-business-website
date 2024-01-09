import BlogCard from './BlogCard';
import blog1 from '../../assets/images/blog/blog-1.jpg';
import blog1author from '../../assets/images/blog/blog-author.jpg';
import blog2 from '../../assets/images/blog/blog-2.jpg';
import blog2author from '../../assets/images/blog/blog-author-2.jpg';
import blog3 from '../../assets/images/blog/blog-3.jpg';
import blog3author from '../../assets/images/blog/blog-author-3.jpg';
import blog4 from '../../assets/images/blog/blog-4.jpg';
import blog4author from '../../assets/images/blog/blog-author-4.jpg';
import blog5 from '../../assets/images/blog/blog-5.jpg';
import blog5author from '../../assets/images/blog/blog-author-5.jpg';
import blog6 from '../../assets/images/blog/blog-6.jpg';
import blog6author from '../../assets/images/blog/blog-author-6.jpg';

function BlogCards() {
  return (
    <div className="px-4 py-12 md:px-12 lg:px-16 space-y-2 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      <BlogCard
        img1={blog1}
        job="Politics"
        desc="Dolorum optio tempore voluptas dignissimos"
        img2={blog1author}
        name="Maria Doe"
        date="Jan 1, 2022"
      />
      <BlogCard
        img1={blog2}
        job="Sports"
        desc="Nisi magni odit consequatur autem nulla dolorem"
        img2={blog2author}
        name="Allisa Mayer"
        date="Jun 5, 2022"
      />
      <BlogCard
        img1={blog3}
        job="Entertainment"
        desc="Possimus soluta ut id suscipit ea ut in quo quia et soluta"
        img2={blog3author}
        name="Mark Dower"
        date="Jan 22, 2022"
      />
      <BlogCard
        img1={blog4}
        job="Sports"
        desc="Non rem rerum nam cum quo minus olor distincti"
        img2={blog4author}
        name="Lisa Neymar"
        date="Jan 30, 2022"
      />
      <BlogCard
        img1={blog5}
        job="Politics"
        desc="Accusamus quaerat aliquam qui debitis facilis consequatur"
        img2={blog5author}
        name="Denis Peterson"
        date="Jan 30, 2022"
      />
      <BlogCard
        img1={blog6}
        job="Entertainment"
        desc="Distinctio provident quibusdam numquam aperiam aut"
        img2={blog6author}
        name="Mika Lendon"
        date="Feb 14, 2022"
      />
    </div>
  );
}

export default BlogCards;
