import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Selector from '../../../component/Selector';
import Uploader from '../../../component/uploader/Uploader';
import RichTextEdtr from '../../../component/RichTextEditor';
import ChipInput from '../../../component/ChipInput';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from './productSchema';
import { useAddProductMutation, useGetProductsQuery, useUpdateProductMutation, useDeleteProductImageMutation } from '../../../globalState/product/productApis';
import { statusData, brandData, productCollectionData, categoriesData, shippingRuleData, bundleDealData, taxRuleData } from './selectFieldData';
import { useNavigate, useParams } from 'react-router-dom';

function AddOrUpdateProductFields() {

    let { id } = useParams()

    const { data, isSuccess } = useGetProductsQuery()

    const productForUpdate = isSuccess && data?.data?.find(ele => ele._id === id);

    let navigate = useNavigate()

    const [addProduct] = useAddProductMutation()

    const [updateProduct] = useUpdateProductMutation()

    const defaultValues = {
        productImage: [],
        productTitle: productForUpdate ? productForUpdate.productTitle : "",
        productSlug: productForUpdate ? productForUpdate.productSlug : "",
        productPurchasedAmount: productForUpdate ? productForUpdate.productPurchasedAmount : 0,
        productSellingAmount: productForUpdate ? productForUpdate.productSellingAmount : 0,
        productOfferedAmount: productForUpdate ? productForUpdate.productOfferedAmount : 0,
        productCategories: productForUpdate ? productForUpdate.productCategories : [],
        productUnit: productForUpdate ? productForUpdate.productUnit : 0,
        productBadge: productForUpdate ? productForUpdate.productBadge : 0,
        productOverview: productForUpdate ? productForUpdate.productOverview : "",
        productDescription: productForUpdate ? productForUpdate.productDescription : "",
        productStatus: productForUpdate ? productForUpdate.productStatus : "",
        productBrand: productForUpdate ? productForUpdate.productBrand : "",
        productTags: productForUpdate ? productForUpdate.productTags : [],
        productTaxRule: productForUpdate ? productForUpdate.productTaxRule : "",
        productShippingRule: productForUpdate ? productForUpdate.productShippingRule : "",
        productBundleDeal: productForUpdate ? productForUpdate.productBundleDeal : "",
        productCollection: productForUpdate ? productForUpdate.productCollection : [],
        productRefundable: productForUpdate ? productForUpdate.productRefundable : false,
        productWarranty: productForUpdate ? productForUpdate.productWarranty : false,
        productMetaTitle: productForUpdate ? productForUpdate.productMetaTitle : "",
        productMetaDescription: productForUpdate ? productForUpdate.productMetaDescription : ""
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {
        const formData = new FormData()
        Array.isArray(data.productImage) && data.productImage.forEach((image) => {
            formData.append(`productImage`, image);
        });
        formData.append('productTitle', data.productTitle);
        formData.append('productSlug', data.productSlug);
        formData.append('productPurchasedAmount', data.productPurchasedAmount);
        formData.append('productSellingAmount', data.productSellingAmount);
        formData.append('productOfferedAmount', data.productOfferedAmount);
        Array.isArray(data.productCategories) && data.productCategories.forEach((category, index) => {
            formData.append(`productCategories[${index}]`, category);
        });
        formData.append('productUnit', data.productUnit);
        formData.append('productBadge', data.productBadge);
        formData.append('productOverview', data.productOverview);
        formData.append('productDescription', data.productDescription);
        formData.append('productStatus', data.productStatus);
        formData.append('productBrand', data.productBrand);
        Array.isArray(data.productTags) && data.productTags.forEach((tags, index) => {
            formData.append(`productTags[${index}]`, tags);
        });
        formData.append('productTaxRule', data.productTaxRule);
        formData.append('productShippingRule', data.productShippingRule);
        formData.append('productBundleDeal', data.productBundleDeal);
        Array.isArray(data.productCollection) && data.productCollection.forEach((collection, index) => {
            formData.append(`productCollection[${index}]`, collection);
        });
        formData.append('productRefundable', data.productRefundable);
        formData.append('productWarranty', data.productWarranty);
        formData.append('productMetaTitle', data.productMetaTitle);
        formData.append('productMetaDescription', data.productMetaDescription);

        try {
            await id ? updateProduct({ id, formData }) : addProduct(formData)
        } catch (error) {
            console.log(error)
        }
        navigate("/products")
    };


    const [deleteProductImage] = useDeleteProductImageMutation()

    async function handleDelete(imageId, dataId) {
        await deleteProductImage({ dataId, imageId })
    }


    return (
        <form fullWidth onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Typography variant="h6">Image</Typography>
                <Uploader
                    onChange={(e) => setValue("productImage", e.files)}
                    image={productForUpdate && productForUpdate.productImage}
                    dataId={productForUpdate && productForUpdate._id}
                    uploadType={"multiple"}
                    onDelete={handleDelete}
                />
                {errors.productImage && <Typography color={"red"} mt={".5rem"}>*{errors.productImage.message}</Typography>}
                <Stack>
                    <TextField
                        label="Title"
                        {...register("productTitle", { required: true })}
                    />
                    {errors.productTitle && <Typography color={"red"} mt={".5rem"}>*{errors.productTitle.message}</Typography>}
                </Stack>
                <Stack>
                    <TextField
                        label="Slug"
                        {...register("productSlug", { required: true })}
                    />
                    {errors.productSlug && <Typography color={"red"} mt={".5rem"}>*{errors.productSlug.message}</Typography>}
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                    <Stack width={"100%"}>
                        <TextField
                            {...register("productPurchasedAmount", { required: true })}
                            type='number'
                            label="Purchased(₹)"
                            fullWidth
                        />
                        {errors.productPurchasedAmount && <Typography color={"red"} mt={".5rem"}>*{errors.productPurchasedAmount.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            {...register("productSellingAmount", { required: true })}
                            type='number'
                            label="Selling(₹)"
                            fullWidth
                        />
                        {errors.productSellingAmount && <Typography color={"red"} mt={".5rem"}>*{errors.productSellingAmount.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            {...register("productOfferedAmount", { required: true })}
                            type='number'
                            label="Offered(₹)"
                            fullWidth
                        />
                        {errors.productOfferedAmount && <Typography color={"red"} mt={".5rem"}>*{errors.productOfferedAmount.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack>
                    <Selector
                        value={watch("productCategories") || []}
                        onChange={(e) => setValue("productCategories", e.target.value)}
                        placeholder='Categories'
                        selectType="multiple"
                        options={categoriesData}
                    />
                    {errors.productCategories && <Typography color={"red"} mt={".5rem"}>*{errors.productCategories.message}</Typography>}
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 40 }}
                >
                    <Stack width={"100%"}>
                        <TextField
                            {...register("productUnit", { required: true })}
                            type='number'
                            label="Unit"
                            fullWidth
                        />
                        {errors.productUnit && <Typography color={"red"} mt={".5rem"}>*{errors.productUnit.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            {...register("productBadge", { required: true })}
                            type='number'
                            label="Badge"
                            fullWidth
                        />
                        {errors.productBadge && <Typography color={"red"} mt={".5rem"}>*{errors.productBadge.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack>
                    <RichTextEdtr
                        value={watch("productOverview")}
                        onChange={(value) => setValue("productOverview", value)}
                        placeholder='Overview'
                    />
                    {errors.productOverview && <Typography color={"red"} mt={".5rem"}>*{errors.productOverview.message}</Typography>}
                </Stack>
                <Stack>
                    <RichTextEdtr
                        value={watch("productDescription")}
                        onChange={(value) => setValue("productDescription", value)}
                        placeholder='Description'
                    />
                    {errors.productDescription && <Typography color={"red"} mt={".5rem"}>*{errors.productDescription.message}</Typography>}
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("productStatus")}
                            onChange={(e) => setValue("productStatus", e.target.value)}
                            placeholder='Status'
                            selectType="single"
                            options={statusData}
                        />
                        {errors.productStatus && <Typography color={"red"} mt={".5rem"}>*{errors.productStatus.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("productBrand")}
                            onChange={(e) => setValue("productBrand", e.target.value)}
                            placeholder='Brand'
                            selectType="single"
                            options={brandData}
                        />
                        {errors.productBrand && <Typography color={"red"} mt={".5rem"}>*{errors.productBrand.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack>
                    <ChipInput
                        value={watch("productTags") || []}
                        onChange={(e) => setValue("productTags", e)}
                        placeholder={"Tags - Type and press enter "}
                    />
                    {errors.productTags && <Typography color={"red"} mt={".5rem"}>*{errors.productTags.message}</Typography>}
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("productTaxRule")}
                            onChange={(e) => setValue("productTaxRule", e.target.value)}
                            placeholder='Tax rule'
                            selectType="single"
                            options={taxRuleData}
                        />
                        {errors.productTaxRule && <Typography color={"red"} mt={".5rem"}>*{errors.productTaxRule.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("productShippingRule")}
                            onChange={(e) => setValue("productShippingRule", e.target.value)}
                            placeholder='Shipping rule'
                            selectType="single"
                            options={shippingRuleData}
                        />
                        {errors.productShippingRule && <Typography color={"red"} mt={".5rem"}>*{errors.productShippingRule.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("productBundleDeal")}
                            onChange={(e) => setValue("productBundleDeal", e.target.value)}
                            placeholder='Bundle deal'
                            selectType="single"
                            options={bundleDealData}
                        />
                        {errors.productBundleDeal && <Typography color={"red"} mt={".5rem"}>*{errors.productBundleDeal.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack>
                    <Selector
                        placeholder='Product collection'
                        selectType="multiple"
                        value={watch("productCollection") || []}
                        onChange={(e) => setValue("productCollection", e.target.value)}
                        options={productCollectionData}
                    />
                    {errors.productCollection && <Typography color={"red"} mt={".5rem"}>*{errors.productCollection.message}</Typography>}
                </Stack>
                <Stack spacing={2}>
                    <Stack>
                        <Typography>Refundable</Typography>
                        <RadioGroup>
                            <FormControlLabel
                                value={true}
                                onChange={(e) => setValue("productRefundable", e.target.value === 'true')}
                                checked={watch("productRefundable") === true}
                                control={<Radio />}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={false}
                                onChange={(e) => setValue("productRefundable", e.target.value === 'true')}
                                checked={watch("productRefundable") === false}
                                control={<Radio />}
                                label="No"
                            />
                        </RadioGroup>
                    </Stack>
                    <Stack>
                        <Typography>Warranty</Typography>
                        <RadioGroup>
                            <FormControlLabel
                                checked={watch("productWarranty") === true}
                                onChange={(e) => setValue("productWarranty", e.target.value === 'true')}
                                value={true}
                                control={<Radio />}
                                label="Yes"
                            />
                            <FormControlLabel
                                checked={watch("productWarranty") === false}
                                onChange={(e) => setValue("productWarranty", e.target.value === 'true')}
                                value={false}
                                control={<Radio />}
                                label="No"
                            />
                        </RadioGroup>
                    </Stack>
                </Stack>
                <Stack>
                    <TextField
                        {...register("productMetaTitle", { required: true })}
                        label="Meta title"
                    />
                    {errors.productMetaTitle && <Typography color={"red"} mt={".5rem"}>*{errors.productMetaTitle.message}</Typography>}
                </Stack>
                <Stack>
                    <TextField
                        {...register("productMetaDescription", { required: true })}
                        rows={4}
                        label="Meta description"
                        multiline
                    />
                    {errors.productMetaDescription && <Typography color={"red"} mt={".5rem"}>*{errors.productMetaDescription.message}</Typography>}
                </Stack>
                <Stack direction={"row"} justifyContent={"end"}>
                    <Button
                        sx={{
                            color: "white",
                            borderRadius: "5px",
                            bgcolor: "#0ab39c",
                            width: "5rem",
                            height: "2.5rem",
                            BoxShadow: "none",
                            '&:hover': {
                                bgcolor: "#0ab39c"
                            }
                        }}
                        type='submit'
                    >
                        <Icon
                            icon="mdi:printer"
                            style={{ fontSize: "1.2rem", color: "white", marginRight: ".3rem" }}
                        />
                        Save
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}

export default AddOrUpdateProductFields;