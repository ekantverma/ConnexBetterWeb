import { useState } from "react";
import axios from "axios";

export default function PostBlog(){
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        authorName: "",
        authorImage: "",
        category: "Email",
        mainImage: "",
        subheadings: [{ heading: "", content: "" }],
        bulletPoints: [""],
        additionalImages: [""],
        ctaText: "",
        ctaLink: "",
        isPublished: false,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubheadingChange = (index, key, value) => {
        const newSubheadings = [...formData.subheadings];
        newSubheadings[index][key] = value;
        setFormData({ ...formData, subheadings: newSubheadings });
    };

    const addSubheading = () => {
        setFormData({ ...formData, subheadings: [...formData.subheadings, { heading: "", content: "" }] });
    };

    const handleBulletChange = (index, value) => {
        const newBullets = [...formData.bulletPoints];
        newBullets[index] = value;
        setFormData({ ...formData, bulletPoints: newBullets });
    };

    const addBullet = () => {
        setFormData({ ...formData, bulletPoints: [...formData.bulletPoints, ""] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:3000/create", formData);
            alert("✅ Blog Posted Successfully!");
            setFormData({
                title: "",
                description: "",
                authorName: "",
                authorImage: "",
                category: "Email",
                mainImage: "",
                subheadings: [{ heading: "", content: "" }],
                bulletPoints: [""],
                additionalImages: [""],
                ctaText: "",
                ctaLink: "",
                isPublished: false,
            });
        } catch (error) {
            console.error("❌ Error posting blog:", error);
            alert("Failed to post blog!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Post a New Blog</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="title" placeholder="Title" className="border p-2 w-full mb-3 rounded" value={formData.title} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" className="border p-2 w-full mb-3 rounded h-24" value={formData.description} onChange={handleChange} required />
                <input type="text" name="authorName" placeholder="Author Name" className="border p-2 w-full mb-3 rounded" value={formData.authorName} onChange={handleChange} required />
                <input type="text" name="authorImage" placeholder="Author Image URL" className="border p-2 w-full mb-3 rounded" value={formData.authorImage} onChange={handleChange} />
                
                <select name="category" className="border p-2 w-full mb-3 rounded" value={formData.category} onChange={handleChange}>
                    <option value="SMS API Integration">SMS API Integration</option>
                    <option value="Bulk WhatsApp Marketing">Bulk WhatsApp Marketing</option>
                    <option value="Email Marketing">Email Marketing</option>
                </select>

                <input type="text" name="mainImage" placeholder="Main Image URL" className="border p-2 w-full mb-3 rounded" value={formData.mainImage} onChange={handleChange} required />

                <div className="mb-3">
                    <h3 className="text-lg font-semibold">Subheadings</h3>
                    {formData.subheadings.map((sub, index) => (
                        <div key={index} className="flex flex-col mb-2">
                            <input type="text" placeholder="Heading" className="border p-2 w-full mb-1 rounded" value={sub.heading} onChange={(e) => handleSubheadingChange(index, "heading", e.target.value)} />
                            <textarea placeholder="Content" className="border p-2 w-full rounded h-16" value={sub.content} onChange={(e) => handleSubheadingChange(index, "content", e.target.value)} />
                        </div>
                    ))}
                    <button type="button" onClick={addSubheading} className="bg-green-500 text-white py-1 px-3 rounded mt-2">+ Add Subheading</button>
                </div>

                <div className="mb-3">
                    <h3 className="text-lg font-semibold">Bullet Points</h3>
                    {formData.bulletPoints.map((bullet, index) => (
                        <input key={index} type="text" placeholder="Bullet Point" className="border p-2 w-full mb-1 rounded" value={bullet} onChange={(e) => handleBulletChange(index, e.target.value)} />
                    ))}
                    <button type="button" onClick={addBullet} className="bg-green-500 text-white py-1 px-3 rounded mt-2">+ Add Bullet</button>
                </div>

                <div className="mb-3">
                    <h3 className="text-lg font-semibold">Additional Images</h3>
                    <input type="text" name="additionalImages" placeholder="Additional Image URL" className="border p-2 w-full mb-2 rounded" value={formData.additionalImages} onChange={handleChange} />
                </div>

                <input type="text" name="ctaText" placeholder="CTA Text" className="border p-2 w-full mb-3 rounded" value={formData.ctaText} onChange={handleChange} />
                <input type="text" name="ctaLink" placeholder="CTA Link" className="border p-2 w-full mb-3 rounded" value={formData.ctaLink} onChange={handleChange} />

                <div className="flex items-center mb-3">
                    <input type="checkbox" name="isPublished" checked={formData.isPublished} onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })} className="mr-2" />
                    <label>Publish Blog</label>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full" disabled={loading}>
                    {loading ? "Posting..." : "Post Blog"}
                </button>
            </form>
        </div>
    );
}
