import * as z from 'zod';

const MB_BYTES = 1024 * 1024;

const ACCEPTED_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/svg", "image/webp", "image/gif"];

export const productSchema = z.object({
    productImage: z.array(
        z.instanceof(File)
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
            }),
    ),
    productTitle: z.string().trim().min(1, "Title is required"),
    productSlug: z.string().trim().min(1, "Slug is required"),
    productPurchasedAmount: z.coerce.number().int().min(1, "Purchased price is required"),
    productSellingAmount: z.coerce.number().int().min(1, "Selling price is required"),
    productOfferedAmount: z.coerce.number().int().optional(),
    productCategories: z.array(z.string()).min(1, "At least one Category is required"),
    productUnit: z.coerce.number().int().min(1, "Unit is required"),
    productBadge: z.coerce.number().int().min(1, "Badge is required"),
    productOverview: z.string().trim().min(1, "Overview is required"),
    productDescription: z.string().trim().min(1, "Description is required"),
    productStatus: z.string().trim().min(1, "Status is required"),
    productBrand: z.string().trim().min(1, "Brand is required"),
    productTags: z.array(z.string()).min(1, "At least one tag is required"),
    productTaxRule: z.string().trim().min(1, "Tax rule is required"),
    productShippingRule: z.string().trim().min(1, "Shipping rule is required"),
    productBundleDeal: z.string().trim().min(1, "Bundle deal is required"),
    productCollection: z.array(z.string()).min(1, "At least one Collection is required"),
    productRefundable: z.boolean(),
    productWarranty: z.boolean(),
    productMetaTitle: z.string().trim().min(1, "Meta title is required"),
    productMetaDescription: z.string().trim().min(1, "Meta description is required")
});