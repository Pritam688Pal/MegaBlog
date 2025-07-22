import Conf from "../conf/Conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(Conf.appWriteUrl)
      .setProject(Conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        Conf.appWriteDataBaseId,
        Conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("AppWrite :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        Conf.appWriteDataBaseId,
        Conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("AppWrite :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Conf.appWriteDataBaseId,
        Conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppWrite :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Conf.appWriteDataBaseId,
        Conf.appWriteCollectionId,
        slug,
        []
      );
    } catch (error) {
      console.log("AppWrite :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        Conf.appWriteDataBaseId,
        Conf.appWriteCollectionId,
        query
      );
    } catch (error) {
      console.log("AppWrite :: getPosts :: error", error);
      return false;
    }
  }

  //file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        Conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppWrite :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(Conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("AppWrite :: deleteFile :: error", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    return this.bucket.getFilePreview(Conf.appWriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
