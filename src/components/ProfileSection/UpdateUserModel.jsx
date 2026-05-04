"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";

export function UpdateUserModel() {
    const updateProfile = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        await authClient.updateUser({
            image: photo,
            name: name,
        });

        
    };

    return (
        <Modal>
            <Button variant="secondary">Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <BiUser className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </BiUser>
                            <Modal.Heading>Update Your Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    onSubmit={updateProfile}
                                    className="flex flex-col gap-4"
                                >
                                    <TextField
                                        className="w-full"
                                        name="name"
                                        type="text"
                                    >
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField
                                        className="w-full"
                                        name="photo"
                                        type="text"
                                    >
                                        <Label>Photo URL</Label>
                                        <Input placeholder="Enter your photo URL" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">
                                            Update
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
