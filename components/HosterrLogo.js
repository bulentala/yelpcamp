const HosterrLogo = (props) => {
  let { pageProps } = props;
  return (
    <div {...pageProps}>
      <svg
        width="105"
        height="24"
        viewBox="0 0 105 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.411 21.39L3.357 24L3.091 22.947C2.904 22.203 3.005 21.413 3.373 20.748L5.99 16.019C6.377 17.619 6.838 19.291 7.411 21.39ZM20.626 20.748L17.98 15.964C17.589 17.62 17.177 19.184 16.611 21.405L20.643 24L20.909 22.947C21.095 22.204 20.994 21.414 20.626 20.748V20.748ZM17 9.156C16.965 12.423 15.834 16.332 14.653 21H9.38C8.146 16.466 7 12.531 7 9.191C7 5.488 8.511 2.503 12 0C15.559 2.517 17.04 5.425 17 9.156ZM14.886 9.734C15 9.406 15.047 8.547 14.823 8.026C13.063 8.239 10.933 8.239 9.173 8.026C8.95 8.547 8.997 9.406 9.112 9.734C9.799 9.929 10.898 10.026 11.999 10.026C13.098 10.026 14.197 9.929 14.886 9.734ZM13.447 24H10.552L10 22H14L13.447 24Z"
          fill="black"
        />
        <path
          d="M53.806 6.616C53.398 6.64 53.104 6.688 52.924 6.76C52.744 6.832 52.618 6.97 52.546 7.174C52.486 7.378 52.456 7.708 52.456 8.164V17.092C52.456 17.548 52.486 17.878 52.546 18.082C52.618 18.286 52.744 18.424 52.924 18.496C53.104 18.568 53.398 18.616 53.806 18.64V19C53.218 18.964 52.306 18.946 51.07 18.946C49.858 18.946 48.916 18.964 48.244 19V18.64C48.64 18.616 48.928 18.568 49.108 18.496C49.3 18.424 49.426 18.286 49.486 18.082C49.558 17.878 49.594 17.548 49.594 17.092V12.772H44.824V17.092C44.824 17.548 44.854 17.878 44.914 18.082C44.986 18.286 45.112 18.424 45.292 18.496C45.472 18.568 45.766 18.616 46.174 18.64V19C45.526 18.964 44.62 18.946 43.456 18.946C42.172 18.946 41.224 18.964 40.612 19V18.64C41.008 18.616 41.296 18.568 41.476 18.496C41.668 18.424 41.794 18.286 41.854 18.082C41.926 17.878 41.962 17.548 41.962 17.092V8.164C41.962 7.708 41.926 7.378 41.854 7.174C41.794 6.97 41.668 6.832 41.476 6.76C41.296 6.688 41.008 6.64 40.612 6.616V6.256C41.224 6.292 42.172 6.31 43.456 6.31C44.62 6.31 45.526 6.292 46.174 6.256V6.616C45.766 6.64 45.472 6.688 45.292 6.76C45.112 6.832 44.986 6.97 44.914 7.174C44.854 7.378 44.824 7.708 44.824 8.164V12.412H49.594V8.164C49.594 7.708 49.558 7.378 49.486 7.174C49.426 6.97 49.3 6.832 49.108 6.76C48.928 6.688 48.64 6.64 48.244 6.616V6.256C48.916 6.292 49.858 6.31 51.07 6.31C52.306 6.31 53.218 6.292 53.806 6.256V6.616ZM59.1385 9.442C60.5185 9.442 61.5985 9.838 62.3785 10.63C63.1585 11.41 63.5485 12.652 63.5485 14.356C63.5485 16.06 63.1585 17.302 62.3785 18.082C61.5985 18.862 60.5185 19.252 59.1385 19.252C57.7705 19.252 56.6905 18.862 55.8985 18.082C55.1185 17.302 54.7285 16.06 54.7285 14.356C54.7285 12.652 55.1185 11.41 55.8985 10.63C56.6905 9.838 57.7705 9.442 59.1385 9.442ZM59.1385 9.802C58.6225 9.802 58.2085 10.18 57.8965 10.936C57.5965 11.68 57.4465 12.82 57.4465 14.356C57.4465 15.892 57.5965 17.032 57.8965 17.776C58.2085 18.52 58.6225 18.892 59.1385 18.892C59.6665 18.892 60.0805 18.526 60.3805 17.794C60.6805 17.05 60.8305 15.904 60.8305 14.356C60.8305 12.808 60.6745 11.662 60.3625 10.918C60.0625 10.174 59.6545 9.802 59.1385 9.802ZM68.2362 9.442C68.6922 9.442 69.1122 9.502 69.4962 9.622C69.8802 9.73 70.1742 9.856 70.3782 10C70.4982 10.084 70.6062 10.126 70.7022 10.126C70.8102 10.126 70.9002 10.072 70.9722 9.964C71.0562 9.844 71.1102 9.676 71.1342 9.46H71.5122C71.4642 10.072 71.4402 11.128 71.4402 12.628H71.0622C70.9542 11.836 70.7142 11.176 70.3422 10.648C69.9822 10.108 69.4542 9.838 68.7582 9.838C68.3982 9.838 68.0982 9.94 67.8582 10.144C67.6302 10.348 67.5162 10.63 67.5162 10.99C67.5162 11.398 67.6542 11.752 67.9302 12.052C68.2062 12.34 68.6382 12.694 69.2262 13.114L69.7482 13.492C70.4802 14.044 71.0202 14.536 71.3682 14.968C71.7162 15.4 71.8902 15.94 71.8902 16.588C71.8902 17.116 71.7342 17.584 71.4222 17.992C71.1222 18.4 70.7142 18.712 70.1982 18.928C69.6822 19.144 69.1122 19.252 68.4882 19.252C67.8282 19.252 67.2642 19.126 66.7962 18.874C66.4122 18.682 66.1362 18.556 65.9682 18.496C65.8482 18.46 65.7402 18.502 65.6442 18.622C65.5602 18.73 65.4942 18.898 65.4462 19.126H65.0682C65.1162 18.442 65.1402 17.242 65.1402 15.526H65.5182C65.7582 17.734 66.5682 18.838 67.9482 18.838C68.2962 18.838 68.5902 18.736 68.8302 18.532C69.0822 18.316 69.2082 17.992 69.2082 17.56C69.2082 17.224 69.1302 16.924 68.9742 16.66C68.8302 16.396 68.6442 16.162 68.4162 15.958C68.1882 15.754 67.8462 15.472 67.3902 15.112C66.8502 14.68 66.4362 14.332 66.1482 14.068C65.8722 13.804 65.6322 13.492 65.4282 13.132C65.2362 12.772 65.1402 12.37 65.1402 11.926C65.1402 11.158 65.4402 10.552 66.0402 10.108C66.6402 9.664 67.3722 9.442 68.2362 9.442ZM76.6407 9.694H78.7647V10.054H76.6407V17.326C76.6407 17.686 76.7007 17.944 76.8207 18.1C76.9527 18.244 77.1567 18.316 77.4327 18.316C77.9487 18.316 78.3567 17.956 78.6567 17.236L78.9627 17.398C78.5067 18.634 77.6847 19.252 76.4967 19.252C75.7047 19.252 75.1047 19.048 74.6967 18.64C74.4447 18.388 74.2707 18.076 74.1747 17.704C74.0907 17.32 74.0487 16.798 74.0487 16.138V10.054H72.5367V9.694H74.0487V7.318C75.0447 7.318 75.9087 7.126 76.6407 6.742V9.694ZM84.5365 17.776C85.5205 17.776 86.3125 17.296 86.9125 16.336L87.2365 16.444C86.9965 17.224 86.5645 17.89 85.9405 18.442C85.3285 18.982 84.5605 19.252 83.6365 19.252C82.3645 19.252 81.3505 18.85 80.5945 18.046C79.8505 17.23 79.4785 16.03 79.4785 14.446C79.4785 12.826 79.8805 11.59 80.6845 10.738C81.4885 9.874 82.5565 9.442 83.8885 9.442C86.1445 9.442 87.2725 10.774 87.2725 13.438H82.2145C82.2025 13.618 82.1965 13.9 82.1965 14.284C82.1965 15.076 82.3045 15.736 82.5205 16.264C82.7485 16.792 83.0365 17.176 83.3845 17.416C83.7445 17.656 84.1285 17.776 84.5365 17.776ZM83.7805 9.82C83.3485 9.82 82.9885 10.09 82.7005 10.63C82.4245 11.158 82.2505 11.98 82.1785 13.096H85.0045C85.0285 12.148 84.9325 11.368 84.7165 10.756C84.5125 10.132 84.2005 9.82 83.7805 9.82ZM94.4013 9.442C94.9413 9.442 95.3493 9.604 95.6253 9.928C95.9013 10.252 96.0393 10.642 96.0393 11.098C96.0393 11.542 95.9073 11.908 95.6433 12.196C95.3913 12.472 95.0553 12.61 94.6353 12.61C94.2273 12.61 93.9033 12.508 93.6633 12.304C93.4233 12.088 93.3033 11.806 93.3033 11.458C93.3033 10.882 93.5673 10.414 94.0953 10.054C94.0473 10.042 93.9753 10.036 93.8793 10.036C93.7593 10.036 93.6633 10.048 93.5913 10.072C93.1353 10.144 92.7453 10.42 92.4213 10.9C92.1093 11.38 91.9533 11.872 91.9533 12.376V17.146C91.9533 17.698 92.0853 18.082 92.3493 18.298C92.6253 18.514 93.0573 18.622 93.6453 18.622V19C93.4773 19 93.3393 18.994 93.2313 18.982C92.0073 18.946 91.1913 18.928 90.7833 18.928C90.4593 18.928 89.7213 18.946 88.5693 18.982C88.4733 18.994 88.3533 19 88.2093 19V18.622C88.6413 18.622 88.9413 18.532 89.1093 18.352C89.2773 18.16 89.3613 17.818 89.3613 17.326V11.656C89.3613 11.104 89.2773 10.702 89.1093 10.45C88.9413 10.198 88.6413 10.072 88.2093 10.072V9.694C88.5933 9.73 88.9653 9.748 89.3253 9.748C90.3933 9.748 91.2693 9.664 91.9533 9.496V11.17C92.1813 10.654 92.5113 10.24 92.9433 9.928C93.3753 9.604 93.8613 9.442 94.4013 9.442ZM102.804 9.442C103.344 9.442 103.752 9.604 104.028 9.928C104.304 10.252 104.442 10.642 104.442 11.098C104.442 11.542 104.31 11.908 104.046 12.196C103.794 12.472 103.458 12.61 103.038 12.61C102.63 12.61 102.306 12.508 102.066 12.304C101.826 12.088 101.706 11.806 101.706 11.458C101.706 10.882 101.97 10.414 102.498 10.054C102.45 10.042 102.378 10.036 102.282 10.036C102.162 10.036 102.066 10.048 101.994 10.072C101.538 10.144 101.148 10.42 100.824 10.9C100.512 11.38 100.356 11.872 100.356 12.376V17.146C100.356 17.698 100.488 18.082 100.752 18.298C101.028 18.514 101.46 18.622 102.048 18.622V19C101.88 19 101.742 18.994 101.634 18.982C100.41 18.946 99.5937 18.928 99.1857 18.928C98.8617 18.928 98.1237 18.946 96.9717 18.982C96.8757 18.994 96.7557 19 96.6117 19V18.622C97.0437 18.622 97.3437 18.532 97.5117 18.352C97.6797 18.16 97.7637 17.818 97.7637 17.326V11.656C97.7637 11.104 97.6797 10.702 97.5117 10.45C97.3437 10.198 97.0437 10.072 96.6117 10.072V9.694C96.9957 9.73 97.3677 9.748 97.7277 9.748C98.7957 9.748 99.6717 9.664 100.356 9.496V11.17C100.584 10.654 100.914 10.24 101.346 9.928C101.778 9.604 102.264 9.442 102.804 9.442Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default HosterrLogo;