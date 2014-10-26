package com.awsome.main.inteface;

/**
 * Created with IntelliJ IDEA.
 * User: weingaro
 * Date: 10/26/14
 * Time: 5:57 PM
 * To change this template use File | Settings | File Templates.
 */
public interface  AwsomeAction {
    public static final String SUCCESS = "success";
    public static final String NONE = "none";
    public static final String ERROR = "error";
    public static final String INPUT = "input";
    public static final String LOGIN = "login";
    public String execute() throws Exception;
}
