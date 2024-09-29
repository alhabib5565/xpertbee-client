import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddCourseCurriculum = () => {
  const name = "curriculum";
  const label = "Add modules";
  const placeholder = "";
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name, // this will be 'modules'
  });

  const addModule = () => {
    append({
      moduleTitle: "", // default module title
      lessons: [{ lessonTitle: "" }], // default one lesson per module
    });
  };

  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <div className="space-y-4 mt-2">
        {fields.map((moduleItem, moduleIndex) => (
          <div key={moduleItem.id} className="border p-4 rounded-lg">
            {/* Module Title Input */}
            <FormField
              name={`${name}.${moduleIndex}.moduleTitle`}
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-transparent"
                      placeholder={placeholder || "Module Title"}
                      {...field}
                    />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />

            {/* Lessons Section */}
            <LessonArrayInput
              name={`${name}.${moduleIndex}.lessons`}
              placeholder="Lesson Title"
            />

            {/* Remove Module Button */}
            <Button
              type="button"
              variant="destructive"
              className="w-full mt-2"
              onClick={() => remove(moduleIndex)}
            >
              <Trash className="size-5 mr-2" /> Remove Module
            </Button>
          </div>
        ))}

        {/* Add Module Button */}
        <Button
          type="button"
          onClick={addModule}
          className="w-full border border-dashed mt-4"
          variant="outline"
        >
          Add Module <Plus className="size-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

/* Lessons Array Component */
type LessonArrayInputProps = {
  name: string;
  placeholder?: string;
};

const LessonArrayInput = ({ name, placeholder }: LessonArrayInputProps) => {
  const form = useFormContext();
  const {
    fields: lessonFields,
    append: appendLesson,
    remove: removeLesson,
  } = useFieldArray({
    control: form.control,
    name, // this will be 'modules[index].lessons'
  });

  const addLesson = () => {
    appendLesson({ lessonTitle: "" });
  };

  return (
    <div className="mt-4 space-y-2">
      <FormLabel>Lessons</FormLabel>
      {lessonFields.map((lessonItem, lessonIndex) => (
        <FormField
          key={lessonItem.id}
          name={`${name}.${lessonIndex}.lessonTitle`}
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    className="bg-transparent"
                    placeholder={placeholder || "Lesson Title"}
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="h-10"
                    disabled={lessonFields.length <= 1}
                    onClick={() => removeLesson(lessonIndex)}
                  >
                    Remove
                  </Button>
                </div>
              </FormControl>
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          )}
        />
      ))}

      {/* Add Lesson Button */}
      <Button
        type="button"
        onClick={addLesson}
        className="w-full border border-dashed"
        variant="outline"
      >
        Add Lesson <Plus className="size-5 ml-2" />
      </Button>
    </div>
  );
};

export default AddCourseCurriculum;
