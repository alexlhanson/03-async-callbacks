# Asyncronous callback for reading files with fs module

## Purpose
This was a lab created for the purpose of showing how nesting asyncronous callbacks is a possibility when trying to get them to resolve in order, but that it is slightly unwieldy when thinking about extending the functionality to varying amounts of reads.  

## About
The module has an arity of two, technically, but the callback is built-in so all that is needed is an array of filepaths.