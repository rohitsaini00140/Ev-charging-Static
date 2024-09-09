import * as z from 'zod';

const MB_BYTES = 1024 * 1024;

const ACCEPTED_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/svg", "image/webp", "image/gif"];

export const categorySchema = z.object({
    categoryImage: z.any(z.instanceof(File)
        .superRefine((file, ctx) => {
            if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
                ctx.addIssue({
                    message: 'Invalid image format. Only JPEG, PNG, and GIF are allowed.',
                });
            }
            if (file.size > 5 * MB_BYTES) {
                ctx.addIssue({
                    message: 'Image size is too large. Maximum allowed size is 5MB.',
                });
            }
        })
    ),
    categoryTitle: z.string().trim().min(1, "Title is required"),
    categorySlug: z.string().trim().min(1, "Slug is required"),
    childCategories: z.array(z.string()),
    categoryStatus: z.string().trim().min(1, "Status is required"),
    categoryMetaTitle: z.string().trim().min(1, "Meta title is required"),
    categoryMetaDescription: z.string().trim().min(1, "Meta description is required")
});