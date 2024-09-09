import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Selector from '../../../component/Selector';
import Uploader from '../../../component/uploader/Uploader';
import ChipInput from '../../../component/ChipInput';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { categorySchema } from './categorySchema';
import { statusData } from './selectFieldData';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddCategoryMutation, useGetCategoriesQuery, useUpdateCategoryMutation, useDeleteCategoryImageMutation } from '../../../globalState/category/categoryApis';

function AddOrUpdateCategoryFields() {

    let { id } = useParams()

    const { data, isSuccess } = useGetCategoriesQuery()

    const categoryForUpdate = (isSuccess && data.data) && data.data.find(ele => ele._id === id)

    let navigate = useNavigate()

    const [addCategory] = useAddCategoryMutation()

    const [updateCategory] = useUpdateCategoryMutation()

    const defaultValues = {
        categoryImage: categoryForUpdate ? categoryForUpdate.categoryImage : "",
        categoryTitle: categoryForUpdate ? categoryForUpdate.categoryTitle : "",
        categorySlug: categoryForUpdate ? categoryForUpdate.categorySlug : "",
        childCategories: categoryForUpdate ? categoryForUpdate.childCategories : [],
        categoryStatus: categoryForUpdate ? categoryForUpdate.categoryStatus : "",
        categoryMetaTitle: categoryForUpdate ? categoryForUpdate.categoryMetaTitle : "",
        categoryMetaDescription: categoryForUpdate ? categoryForUpdate.categoryMetaDescription : ""
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(categorySchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('categoryImage', data.categoryImage);
        formData.append('categoryTitle', data.categoryTitle);
        formData.append('categorySlug', data.categorySlug);
        Array.isArray(data.childCategories) && data.childCategories.forEach((childCategory, index) => {
            formData.append(`childCategories[${index}]`, childCategory);
        });
        formData.append('categoryStatus', data.categoryStatus);
        formData.append('categoryMetaTitle', data.categoryMetaTitle);
        formData.append('categoryMetaDescription', data.categoryMetaDescription);

        try {
            await id ? updateCategory({ id, formData }) : addCategory(formData)
        } catch (error) {
            console.log(error)
        }
        navigate("/category")
    };


    const [deleteCategoryImage] = useDeleteCategoryImageMutation()

    async function handleDelete(dataId) {
        await deleteCategoryImage({ dataId })
    }

    return (
        <form fullWidth onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Typography variant="h6">Image</Typography>
                <Uploader
                    onChange={(e) => setValue("categoryImage", e.files[0])}
                    image={categoryForUpdate && categoryForUpdate.categoryImage}
                    dataId={categoryForUpdate && categoryForUpdate._id}
                    uploadType={"single"}
                    onDelete={handleDelete}
                />
                {errors.categoryImage && <Typography color={"red"} mt={".5rem"}>*{errors.categoryImage.message}</Typography>}
                <Stack>
                    <TextField
                        label="Title"
                        {...register("categoryTitle", { required: true })}
                    />
                    {errors.categoryTitle && <Typography color={"red"} mt={".5rem"}>*{errors.categoryTitle.message}</Typography>}
                </Stack>
                <Stack>
                    <TextField
                        label="Slug"
                        {...register("categorySlug", { required: true })}
                    />
                    {errors.categorySlug && <Typography color={"red"} mt={".5rem"}>*{errors.categorySlug.message}</Typography>}
                </Stack>
                <Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("categoryStatus")}
                            onChange={(e) => setValue("categoryStatus", e.target.value)}
                            placeholder='Status'
                            selectType="single"
                            options={statusData}
                        />
                        {errors.categoryStatus && <Typography color={"red"} mt={".5rem"}>*{errors.categoryStatus.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack>
                    <ChipInput
                        value={watch("childCategories") || []}
                        onChange={(e) => setValue("childCategories", e)}
                        placeholder={"Child categories - Type and press enter "}
                    />
                    {errors.childCategories && <Typography color={"red"} mt={".5rem"}>*{errors.childCategories.message}</Typography>}
                </Stack>
                <Stack>
                    <TextField
                        {...register("categoryMetaTitle", { required: true })}
                        label="Meta title"
                    />
                    {errors.categoryMetaTitle && <Typography color={"red"} mt={".5rem"}>*{errors.categoryMetaTitle.message}</Typography>}
                </Stack>
                <Stack>
                    <TextField
                        {...register("categoryMetaDescription", { required: true })}
                        rows={4}
                        label="Meta description"
                        multiline
                    />
                    {errors.categoryMetaDescription && <Typography color={"red"} mt={".5rem"}>*{errors.categoryMetaDescription.message}</Typography>}
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

export default AddOrUpdateCategoryFields;